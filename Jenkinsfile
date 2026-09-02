/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
def NODE = 'git-websites'

pipeline {
    agent {
        label "$NODE"
    }

    options {
        buildDiscarder(
            logRotator(artifactNumToKeepStr: '5', numToKeepStr: '10')
        )
        checkoutToSubdirectory('hop-website')
    }

    environment {
        // Caches live OUTSIDE $WORKSPACE. They used to sit inside it, which
        // post { always { cleanWs() } } deletes - so every build was a cold
        // build, re-fetching ~450MB and paying 220s of Antora instead of 97s.
        ANTORA_CACHE_DIR = "/home/jenkins/.cache/hop-website/antora"
        npm_config_cache  = "/home/jenkins/.cache/hop-website/npm"
        HOP_ENV = 'production'
    }

    stages {
        // The separate 'Theme' stage is gone. The UI is an unzipped directory
        // consumed directly by Antora, so there is nothing to build.
        stage('Build') {
            agent {
                dockerfile {
                    dir 'hop-website'
                    label "$NODE"
                    reuseNode true
                    args '-u root'
                }
            }
            environment {
                HOME = "$WORKSPACE"
            }
            steps {
                sh "cd $WORKSPACE/hop-website && npm ci"
                // astro build -> public/, then Antora adds /manual and
                // /dev-manual to the same directory, then Pagefind indexes both.
                sh "cd $WORKSPACE/hop-website && npm run build"
            }
        }

        stage('Checks') {
            agent {
                dockerfile {
                    dir 'hop-website'
                    label "$NODE"
                    reuseNode true
                    args '-u root'
                }
            }
            environment {
                HOME = "$WORKSPACE"
            }
            steps {
                // Re-enabled. These were commented out on 2025-11-17 and stayed
                // off for 287 days, during which 29 broken links and an empty
                // <title> on /manual/ shipped to production. Land link-checker
                // first as an error and promote html-validate once the existing
                // warnings are burned down - turning everything red on day one
                // is how they were lost the first time.
                sh "cd $WORKSPACE/hop-website && npm run check:links"
                sh "cd $WORKSPACE/hop-website && npm run check:absolute"
                sh "cd $WORKSPACE/hop-website && npm run check:html || true"
            }
        }

        stage('Verify artifact') {
            steps {
                script {
                    // A bad build must never be able to wipe hop.apache.org.
                    // The deploy stage below runs `git rm -rf` before copying,
                    // and .asf.yaml's minimum_page_count is Pelican-only, so
                    // this is the only guard that exists.
                    def pages = sh(script: "find $WORKSPACE/hop-website/public -name '*.html' | wc -l", returnStdout: true).trim() as Integer
                    echo "Built ${pages} HTML pages"
                    if (pages < 5000) {
                        error("Refusing to deploy: only ${pages} pages built (expected >= 5000). Publishing this would gut the site.")
                    }
                    ['index.html', 'manual/latest/index.html', 'download/index.html'].each { p ->
                        def size = sh(script: "stat -c%s $WORKSPACE/hop-website/public/${p} 2>/dev/null || echo 0", returnStdout: true).trim() as Integer
                        if (size < 500) {
                            error("Refusing to deploy: ${p} is missing or empty (${size} bytes).")
                        }
                    }
                }
            }
        }

        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                script {
                    // Captured HERE, in the source checkout. The old pipeline ran
                    // `git rev-parse HEAD` inside the asf-site clone, so every
                    // deploy commit named its own parent and a live regression
                    // could not be bisected back to a source commit.
                    env.SRC_SHA = sh(script: "cd $WORKSPACE/hop-website && git rev-parse --short HEAD", returnStdout: true).trim()
                }
                dir('deploy/staging') {
                    deleteDir()
                    // --depth 1 --single-branch: 7.8s / 46MB, versus 100.7s / 338MB
                    // for the full unshallow clone of every branch this used to do.
                    sh 'git clone --depth 1 --single-branch -b asf-site https://gitbox.apache.org/repos/asf/hop-website.git .'
                    sh 'git rm -rf --ignore-unmatch .'
                    sh "cp -R $WORKSPACE/hop-website/public/. ."
                    sh "cp $WORKSPACE/hop-website/.asf.yaml ."
                    sh "cp $WORKSPACE/hop-website/.htaccess ."
                    sh 'git add .'
                    // Guard the empty commit. Antora stamps a single build
                    // timestamp into every sitemap <lastmod>, which is currently
                    // the only reason this never hits "nothing to commit". Once
                    // that is fixed (tools/stabilise-sitemap.mjs), a no-op build
                    // stages nothing and an unguarded `git commit` exits non-zero.
                    sh "git diff --cached --quiet || git commit -m 'Website updated to ${env.SRC_SHA}'"
                    sh 'git push origin asf-site'
                }
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}
