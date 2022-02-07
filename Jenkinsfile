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

        ansiColor('xterm')

        checkoutToSubdirectory('hop-website')
    }

    environment {
        ANTORA_CACHE_DIR  = "$WORKSPACE/.antora-cache"
        YARN_CACHE_FOLDER = "$WORKSPACE/.yarn-cache"
        HUGO_CACHE_DIR    = "$WORKSPACE/.hugo-cache"
        HOP_ENV         = 'production'
    }

    stages {
        stage('Theme') {
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
                sh "cd $WORKSPACE/hop-website/antora-ui-hop && yarn --non-interactive --frozen-lockfile install"
                sh "cd $WORKSPACE/hop-website/antora-ui-hop && yarn --non-interactive --frozen-lockfile build"
            }
        }

        stage('Website') {
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
                sh "cd $WORKSPACE/hop-website && yarn --non-interactive --frozen-lockfile install"
                sh "cd $WORKSPACE/hop-website && yarn --non-interactive --frozen-lockfile build"
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
                sh "cd $WORKSPACE/hop-website && yarn --non-interactive --frozen-lockfile checks"
            }
        }
        stage('Deploy') {
            when {
                branch 'master'
            }

            steps {
                dir('deploy/staging') {
                    deleteDir()
                    sh 'git clone -b asf-site https://gitbox.apache.org/repos/asf/hop-website.git .'
                    sh 'git rm -rf --ignore-unmatch .'
                    sh "cp -R $WORKSPACE/hop-website/public/. ."
                    sh "cp $WORKSPACE/hop-website/.asf.yaml ."
                    sh "cp $WORKSPACE/hop-website/.htaccess ."
                    sh 'git add .'
                    sh 'git commit -m "Website updated to $(git rev-parse --short HEAD)"'
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