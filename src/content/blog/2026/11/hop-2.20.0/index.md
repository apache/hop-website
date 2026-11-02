---
title: "Apache Hop 2.20 is available!"
description: "The latest Apache Hop release 2.20.0 is now available. Here are the highlights, what to check before you upgrade, and the full list of changes."
publishDate: "2026-11-02T00:00:00+01:00"
authors: hansva
categories: "2.20, Release, Apache Hop"
preview: Apache Hop 2.20 Released
---
<!--
DRAFT, generated from the closed 2.20 GitHub milestone (578 issues) and the 658 PRs merged between 2.19.0-rc1 and 2.20.0-rc1.
TODO before publishing:
  * counts are taken at 2.20.0-rc1
  * screenshots for the highlights (img/Release-2.20/)
  * proofread the "What's new by area" lines: they were summarised from issue/PR text and have not all been checked against the code
-->
The Apache Hop community is happy to announce the release of Apache Hop 2.20!

This is our largest release so far: ***30 contributors***, including ***14 first-time contributors***, closed ***578 issues*** and merged more than 650 pull requests over the past three months.

This post has three parts:

* **Highlights:** the biggest new features.
* **Before you upgrade:** behaviour changes, and regressions from earlier releases that are now fixed. Read this if you run Hop in production.
* **What's new by area:** every change in this release, grouped by part of Hop, so you can see whether the thing you care about changed.

Or [***download Hop 2.20.0***](https://hop.apache.org/download/) right away.

## Highlights

### Lakehouse: Iceberg, Parquet and Spark

The new ***Lake table input*** and ***Lake table output*** transforms read and write Apache Iceberg tables on the local and remote Hop engine, without Spark. They replace the Spark-named Iceberg transforms.

Also new for lakehouse work:

* ***Parquet File Output*** writes Hive-style partitions (for example `year=2026/month=08/`) on one or more fields, without the Spark engine.
* The ***Explorer perspective*** opens `.parquet` files in a read-only preview tab with the file details, the schema and the first 1000 rows.
* Native ***Spark*** pipelines can run on ***YARN***, with Hop GUI, hop-run or Hop Server as the Spark driver.
* The ***Spark SQL*** transform registers every incoming transform as a temporary view, so one SQL statement can join, union and aggregate them.

<!-- TODO screenshot: Lake table output dialog / Parquet preview tab -->

### AI building blocks

Hop 2.20 adds a set of AI building blocks. They are all optional and work through the new ***AI Provider*** metadata, which holds chat, embedding and reranker models.

* ***AI Assistant:*** an advisory assistant for pipelines and workflows, ***off by default***. You review every change before it is applied, and you can undo it.
* ***Text chunker***, ***Embed Text*** and a new ***Vector*** value type turn documents into embeddings that flow through a pipeline as typed values.
* ***pgvector upsert*** and ***pgvector search*** store embeddings in PostgreSQL and run top-k similarity lookups.
* ***Structured extract*** uses a language model to read typed fields (dates, amounts, categories) out of free text.

Together these let you chunk, embed, store and search documents in a pipeline.

### Graph databases beyond Neo4j

Neo4j connections are replaced by pluggable ***graph database connections***. Bolt-based Neo4j, Memgraph, Amazon Neptune, FalkorDB, Apache AGE and Gremlin are supported, and the existing graph transforms and actions work with all of them. Existing Neo4j connections need a check after upgrading; see *Before you upgrade*.

### A database perspective, and better SQL editing

The new ***Database perspective*** shows your project's relational connections in a tree with a filter. From its toolbar you can connect, disconnect, refresh, open SQL editors, generate DDL and preview data. The SQL editors are no longer modal, so you can keep them open next to your pipeline.

All multi-line SQL and script editors (Table Input, Execute SQL script, the script transforms) get a toolbar with undo/redo, cut/copy/paste and ***Find / Find and Replace*** (Ctrl+F / Ctrl+H). The ***Database explorer*** gets a wildcard search filter, icons per database type and a cleaner layout. ***Execute SQL script*** can load its script from a file.

<!-- TODO screenshot: Database perspective -->

### Hop lint

A new ***linting engine*** checks pipelines, workflows and metadata against rules, for example default transform names or oversized canvases. It runs in Hop GUI and on the command line as `hop lint`, with SARIF/JSON output for CI and a git hook.

### More file systems

* ***SMB:*** read and write Windows or Samba shares (SMB 2 and 3) without mounting them.
* ***FTP(S):*** named connection metadata, usable as a VFS file system in any transform or action.
* ***Git:*** a named Git connection serves a branch, tag or commit as a read-only file system, so `hop-run` can run a workflow straight from a repository.
* ***HDFS:*** a marketplace plugin that reads and writes HDFS over WebHDFS, HttpFS or Knox, without Hadoop client JARs.
* ***VFS File Explorer*** (Tools menu): browse any VFS location, including named connections from other projects.

On Hop Server and Hop Web, ***each execution and each web session now gets its own VFS namespace***. Named VFS connections work on Hop Server, and Hop Web users in different projects no longer reset each other's connections.

### New transforms and actions

* ***Watch Files:*** a source transform that detects files arriving, changing or being deleted in a folder. It checks that a file is complete before passing it on and remembers what it has already seen.
* ***Mask fields*** with reusable ***Masking pattern*** metadata: masks personal data (PII) and can keep the mapping for one run or across runs in a database table.
* ***Database value validation:*** checks rows against the target table (length, precision, encoding) before insert. It points to the offending field and value instead of failing on the first database error.
* ***Microsoft SQL Server Bulk Loader.***
* ***Multi Mapping:*** brings back Kettle/PDI-style mappings with any number of inputs and outputs.
* ***Git Input:*** reads commits, files, issues, pull requests and comments from GitHub, GitLab, Bitbucket, Forgejo, Gitea or a local clone.
* ***OpenFormula:*** a fast evaluator for Kettle/PDI formula syntax. Kettle imports now use it.
* ***dbt action:*** run, build, test, seed, snapshot and compile dbt Core projects from a workflow.
* ***Beam IO:*** new MQTT, Debezium, Elasticsearch, Splunk and Snowflake transforms.
* ***OpenLineage:*** a marketplace plugin that emits run, file and column-level lineage.
* ***AWS Secrets Manager*** variable resolver.

### Working faster in Hop GUI

* ***Create mapping:*** select a chain of transforms and turn it into a new mapping pipeline in one step.
* An optional ***palette tree*** in the pipeline and workflow editors (hidden by default) lists transforms and actions by category, with filter and favorites.
* ***Naming Scheme*** metadata defines reusable rules to normalize the names of fields, transforms, tables, files and more.
* ***Configure Hop environment*** (Tools menu, `hop setup`, and a prompt on first start) moves your configuration, audit folder, Java and JDBC settings outside the install folder.
* ***Search projects…*** searches every configured project at once.
* ***Stop after (milliseconds):*** a timeout on the Pipeline and Workflow actions and on the executor transforms stops nested runs that take too long.

### Performance

* Pipelines run at full speed again on ***Java 21***, where the back-off between transforms had turned into a busy wait.
* ***Text File Input*** reads large files in parallel and much faster, especially from S3, Azure and Google Cloud Storage. Copies of the transform can now split the work on a single large file between them.

### Safer by default

Hop Web's embedded server API (`/hop/*`) now enforces the same roles as the web UI, and it is ***closed by default***. Hop Server rejects cross-site browser requests to its servlets. XML and XSD processing no longer resolves external entities, and TLS verification is on unless you turn it off. These changes can affect existing setups; see *Before you upgrade*.

## Before you upgrade

Most projects upgrade without changes. Check this list if your setup uses any of these features.

### Most likely to affect you

* **Hop Web `/hop/*` server API is closed by default**, including in authentication mode NONE. If you use Hop Web as an execution server behind your own network controls, set `HOP_WEB_ALLOW_UNAUTHENTICATED_SERVER_API` (or `allowUnauthenticatedServerApi`). READ_ONLY users can no longer deploy or run work through this API.
* **Neo4j connections are now graph database connections**, a new metadata type (`graph-database-connection`). Check that existing connections, and the transforms and actions that use them, still resolve.
* **Metadata folder names:** some metadata type keys, and with them the folders under `metadata/`, changed to kebab-case. Objects in the old folders still load and move to the new folder the next time you save them. Check version control, scripts and `disabledGuiElements` entries that use the old names.
* **hop-rest is merged into Hop Server.** If you ran hop-rest separately, use Hop Server's `/hop/api/v1` endpoints instead.
* **Sub-pipeline parameters (2.19 regression):** named parameters keep their defaults again unless they are passed explicitly. If your workflows relied on 2.19's behaviour of letting same-named variables override parameters, pass them on the Parameters tab or enable pass-through.
* **Delete files** no longer deletes matching files in subfolders unless *Include subfolders* is checked.
* **Truncate tables** and **Columns exist in a table** now return *false* on connection or execution errors. Workflows that used to continue on the success hop now take the failure hop.
* **Pipeline action:** a pipeline ending in *Copy rows to result* that outputs no rows now passes an empty result to the next action, not the rows of an earlier action.
* **JSON:** JSON `null` in String output fields is now a real null, not the text `"null"`.
* **REST Client** no longer adds `; charset=UTF-8` to the Content-Type it sends. Set the header explicitly if an API needs it.
* **Dates and timestamps:** `HOP_DEFAULT_DATE_FORMAT` no longer affects timestamp parsing; use `HOP_DEFAULT_TIMESTAMP_FORMAT` for that. Converting Timestamp metadata to Date now really converts the value.
* **SQLite dates** are written as ISO text and read with Hop's own parser, so values written by earlier versions may be read differently. **Vertica Bulk Loader** without *Specify database fields* maps fields by name instead of position.
* **Generated DDL** for integer fields (several dialects) and for SQL Server strings and date/time fields changes. Column type mapping now lives in each database dialect. Review generated CREATE and ALTER scripts.
* **Pipelines that used to hang now fail with an error.** This happens when rows are sent to a transform that does not read input, and when a Join Rows transform runs on Beam or Spark.
* **Saved `.hpl` and `.hwf` files** get created and modified Hop version elements. Expect a one-time diff the first time you save each file.
* **CLI:** the short option for in-memory projects is now `-ime`. `HOP_CONFIG_OPTIONS` is now split into words, so quote values that contain spaces.
* **Back up mask mapping tables** before upgrading if you use a hash secret: existing plain-text rows are converted to hashed keys.

### Full list of behaviour changes

Everything below was flagged as a behaviour change in its issue or pull request.

:::details[Show all (82)]
* **Hop GUI:** The bottom-left button now only shows or hides the shared bottom panel; tools are added with + on the panel tab bar. ([#8486](https://github.com/apache/hop/issues/8486), [#8642](https://github.com/apache/hop/issues/8642))
* **Hop GUI:** Imported counts in the Kettle import summary no longer include files skipped because the target already existed. ([#4500](https://github.com/apache/hop/issues/4500), [#8692](https://github.com/apache/hop/issues/8692))
* **Hop GUI:** With the palette tree visible, a click on empty canvas no longer lists transforms/actions to create. Right click is inert by default and no longer acts as a left click on names, badges or hops. ([#8443](https://github.com/apache/hop/issues/8443), [#8450](https://github.com/apache/hop/issues/8450))
* **Hop GUI:** The Default font and Note font settings are gone. Notes without their own font now use the workspace font. ([#2301](https://github.com/apache/hop/issues/2301), [#8068](https://github.com/apache/hop/issues/8068))
* **Hop GUI:** The 'open help in tabs' checkbox under Configuration > Plugins > Explorer perspective is replaced by the 'Open help pages in' option (External browser / Hop GUI tab / Dialog window). Check this setting after upgrading. ([#8098](https://github.com/apache/hop/issues/8098))
* **Hop GUI:** In multi-line text fields, Tab now indents the selected lines instead of its previous behaviour. ([#8653](https://github.com/apache/hop/issues/8653))
* **Hop GUI:** Hops from target-stream transforms (Filter Rows, Switch/Case, ...) to multi-copy transforms can no longer be created. Only copy 0 ever received those rows. ([#4010](https://github.com/apache/hop/issues/4010))
* **Hop GUI:** Number and BigNumber golden-data comparisons now format both values with a mask from field length and precision, so some unit test results may change. ([#2664](https://github.com/apache/hop/issues/2664))
* **Hop Web:** Hop Web dialogs, trees and toolbars are visibly more compact than before. ([#8461](https://github.com/apache/hop/issues/8461), [#8462](https://github.com/apache/hop/issues/8462))
* **Transforms:** On parse failure the original number is now copied to the output field, with type ERROR and is-valid false. ([#8238](https://github.com/apache/hop/issues/8238))
* **Transforms:** The 'Is hidden?' output field can now be true for hidden files; previously it was almost always false. ([#8289](https://github.com/apache/hop/issues/8289))
* **Transforms:** Formula evaluation takes a new optimized path by default for formulas it can handle; it can be switched off with a system property if results differ. ([#8304](https://github.com/apache/hop/issues/8304))
* **Transforms:** Scripts calling LoadScriptFromTab with a missing tab or a broken script now fail at that call instead of silently continuing. ([#8322](https://github.com/apache/hop/issues/8322))
* **Transforms:** Pipelines where Sorted Merge hit comparison errors now stop with an error instead of silently producing misordered output. ([#8354](https://github.com/apache/hop/issues/8354))
* **Transforms:** Enhanced JSON Output now streams output while rows arrive; newline-delimited JSON is opt-in and off by default. ([#8715](https://github.com/apache/hop/issues/8715))
* **Transforms:** The transforms formerly named with 'Spark' are renamed to Lake table input / Lake table output. ([#8802](https://github.com/apache/hop/issues/8802), [#8819](https://github.com/apache/hop/issues/8819), [#8859](https://github.com/apache/hop/issues/8859))
* **Transforms:** The unit test type is now stored as free text. Development and Unit test keep their stored codes (DEVELOPMENT, UNIT_TEST), so existing tests load unchanged; custom types are no longer dropped when the dialog is saved. ([#2420](https://github.com/apache/hop/issues/2420))
* **Transforms:** Pipelines with 'Do not raise an error if no files' checked that previously failed on a missing or invalid file path now continue without error. ([#2723](https://github.com/apache/hop/issues/2723), [#8186](https://github.com/apache/hop/issues/8186))
* **Transforms:** Metadata Injection key names for Simple Mapping input/output mappings changed to be unique; check Metadata Injection pipelines that target Simple Mapping. ([#3025](https://github.com/apache/hop/issues/3025), [#7956](https://github.com/apache/hop/issues/7956))
* **Transforms:** Pipelines that contain Join Rows (cartesian product) are now refused on Beam and Spark run configurations instead of hanging. Redesign such pipelines (for example with a lookup or merge join) or run them on the local engine. ([#2353](https://github.com/apache/hop/issues/2353))
* **Transforms:** The underlying LLM library changed major version; review existing Language Model Chat configurations, in particular Hugging Face, OpenAI proxy and Ollama/Mistral format settings, after upgrading. ([#8336](https://github.com/apache/hop/issues/8336))
* **Transforms:** The 'Position: line/column' label is removed from the JavaScript dialogs. ([#8488](https://github.com/apache/hop/issues/8488), [#8515](https://github.com/apache/hop/issues/8515))
* **Transforms:** Kettle/PDI import now maps a Formula step to the new OpenFormula transform instead of the POI-based Formula transform. Pipelines already in Hop are not changed. ([#8907](https://github.com/apache/hop/issues/8907))
* **Transforms:** With HOP_EMPTY_STRING_DIFFERS_FROM_NULL=Y, JSON nulls and missing paths now come out as null instead of an empty string. ([#4373](https://github.com/apache/hop/issues/4373))
* **Transforms:** Replaced fields that the script does not set used to come out null unless the script text mentioned their name; they now keep their input value, converted to the field's type. ([#8724](https://github.com/apache/hop/issues/8724))
* **Transforms:** Chunk counts and indexes can differ from earlier output where whitespace-only chunks were produced before. ([#8751](https://github.com/apache/hop/issues/8751))
* **Transforms:** Normalised output fields may now carry the source value type instead of always being String. ([#3636](https://github.com/apache/hop/issues/3636), [#8549](https://github.com/apache/hop/issues/8549))
* **Transforms:** Iceberg PATH tables previously written by the native Spark engine ended up under ${java.io.tmpdir}/hop-iceberg-path-catalog-warehouse/; they are now written at the configured path, so data written earlier is not found there. ([#8794](https://github.com/apache/hop/issues/8794), [#8795](https://github.com/apache/hop/issues/8795))
* **Transforms:** HOP_FILE_OUTPUT_MAX_STREAM_LIFE now has a non-zero default (it was 0, and a configured interval never flushed because of a bug). Text File Output now flushes periodically. ([#2406](https://github.com/apache/hop/issues/2406))
* **Transforms:** The 'Get closer value' checkbox in the Fuzzy Match dialog is replaced by a Match mode option. After upgrading, check that existing Fuzzy Match transforms still use the mode you expect. ([#3643](https://github.com/apache/hop/issues/3643))
* **Transforms:** In ETL Metadata Injection the 'Allow empty stream' checkbox is replaced by 'When to run the resulting pipeline', with a new option to run even when every input stream is empty. Existing settings keep their behaviour. ([#9077](https://github.com/apache/hop/issues/9077), [#9078](https://github.com/apache/hop/issues/9078))
* **Transforms:** JSON null values in String output fields are now null, not the string "null". Downstream logic that tested for the literal "null" must check for null instead. ([#7990](https://github.com/apache/hop/issues/7990))
* **Transforms:** The REST Client no longer adds '; charset=UTF-8' to the Content-Type it sends. Set the Content-Type header explicitly if an API needs the charset parameter. ([#8507](https://github.com/apache/hop/issues/8507))
* **Transforms:** The row counters reported for Execute SQL script statements may differ from earlier versions. ([#8386](https://github.com/apache/hop/issues/8386))
* **Actions:** Create folder now reports a blank folder name as a check error. ([#8908](https://github.com/apache/hop/issues/8908), [#8933](https://github.com/apache/hop/issues/8933), [#8939](https://github.com/apache/hop/issues/8939), [#8954](https://github.com/apache/hop/issues/8954))
* **Actions:** A pipeline ending in Copy rows to result that outputs no rows now passes an empty result set to the next action instead of the previous action's rows. ([#4581](https://github.com/apache/hop/issues/4581))
* **Hop Run / CLI & containers:** hop lint now fails on a broken hop-lint.yml or rule pack (also in the git hook), honours --config on a folder and lints even when the linter is switched off in Hop GUI. ([#8826](https://github.com/apache/hop/issues/8826))
* **Actions:** Truncate tables now returns a false result on connection or execution errors; workflows that previously continued on the success hop will take the failure hop. ([#8777](https://github.com/apache/hop/issues/8777), [#8778](https://github.com/apache/hop/issues/8778))
* **Actions:** Columns exist in a table now returns false instead of true when the connection is missing or no columns are listed. ([#8904](https://github.com/apache/hop/issues/8904), [#8911](https://github.com/apache/hop/issues/8911))
* **Actions:** For Sign rows, the User ID is no longer passed to GnuPG (it never had any effect there) and is now logged as unused; set the new Signing key column to choose the signing key. ([#8659](https://github.com/apache/hop/issues/8659))
* **Actions:** dbt: an unrecognised operation is now refused when you click OK, instead of falling back to dbt run. ([#8589](https://github.com/apache/hop/issues/8589))
* **Actions:** Create folder now fails when a file with the folder's name exists, whether or not 'Fail if folder exists' is checked. ([#9049](https://github.com/apache/hop/issues/9049), [#9101](https://github.com/apache/hop/issues/9101))
* **Actions:** Delete files no longer removes matching files in subfolders unless Include subfolders is checked. Check workflows that relied on the old behaviour. ([#7952](https://github.com/apache/hop/issues/7952), [#7957](https://github.com/apache/hop/issues/7957))
* **Pipelines & workflows engine:** Pipelines that previously hung because rows were sent to a transform that does not read its input now fail with an error. Remove the hop or enable the transform's read-from-field option. ([#2641](https://github.com/apache/hop/issues/2641))
* **Pipelines & workflows engine:** If you set HOP_DEFAULT_DATE_FORMAT, it no longer changes how timestamps are parsed; set HOP_DEFAULT_TIMESTAMP_FORMAT instead. ([#8218](https://github.com/apache/hop/issues/8218))
* **Pipelines & workflows engine:** Files saved with name synchronization enabled now store the derived name in the name tag instead of the default name. ([#8620](https://github.com/apache/hop/issues/8620))
* **Pipelines & workflows engine:** Sub-pipeline named parameters keep their defaults again unless passed explicitly; workflows that relied on the 2.19 behaviour of ambient variables overriding parameters must pass them on the Parameters tab or enable pass-through. ([#8084](https://github.com/apache/hop/issues/8084), [#8101](https://github.com/apache/hop/issues/8101))
* **Pipelines & workflows engine:** Saved .hpl and .hwf files now contain additional created/modified Hop version elements, which shows up as a diff the first time files are saved. ([#8039](https://github.com/apache/hop/issues/8039))
* **Pipelines & workflows engine:** The pipeline engine type is no longer written into the pipeline from the chosen run configuration. Pipelines previously saved with 'SingleThreaded' as type may need that setting checked. ([#8262](https://github.com/apache/hop/issues/8262))
* **Pipelines & workflows engine:** Timestamp-to-Date metadata changes now really convert the value, so downstream transforms receive a Date instead of a java.sql.Timestamp. Check pipelines that depended on the old behaviour. ([#5651](https://github.com/apache/hop/issues/5651))
* **Pipelines & workflows engine:** Caching execution information locations now keep at most 'max cache size' entries in memory (default 50). ([#8623](https://github.com/apache/hop/issues/8623), [#8625](https://github.com/apache/hop/issues/8625))
* **Databases:** Column type mapping moved from shared code into each database dialect; type handling for some databases may differ slightly. Check pipelines that depend on specific database type conversions. ([#7997](https://github.com/apache/hop/issues/7997))
* **Databases:** Long-running DDL/DML statements can now be cancelled by the configured query timeout where they previously ran without one. ([#8224](https://github.com/apache/hop/issues/8224))
* **Databases:** SQLite dates are now written as ISO text and read with Hop's own parser; values written by earlier versions may be read differently. Review pipelines that read or write SQLite date columns. ([#3633](https://github.com/apache/hop/issues/3633), [#3910](https://github.com/apache/hop/issues/3910))
* **Databases:** Without 'Specify database fields', Vertica Bulk Loader now maps fields by name, not position. Pipelines that relied on positional mapping with differently named fields must specify the fields. ([#4394](https://github.com/apache/hop/issues/4394))
* **Databases:** Graph connections use a new metadata type (graph-database-connection). Check that existing Neo4j connections and the transforms/actions that use them still resolve after upgrading. ([#3032](https://github.com/apache/hop/issues/3032))
* **Databases:** Generated CREATE/ALTER TABLE SQL for SQL Server date/time fields can differ from earlier releases. ([#8220](https://github.com/apache/hop/issues/8220))
* **Databases:** Generated DDL for integer fields changes for the affected database dialects. Review generated CREATE/ALTER scripts. ([#4174](https://github.com/apache/hop/issues/4174))
* **Databases:** Generated SQL Server DDL for String fields changes. Review generated CREATE/ALTER scripts. ([#8221](https://github.com/apache/hop/issues/8221))
* **File systems (VFS) & cloud:** Paths starting with ~ are now expanded to the user home directory. ([#2402](https://github.com/apache/hop/issues/2402), [#8256](https://github.com/apache/hop/issues/8256))
* **Metadata & projects:** Duplicate on an inherited item (for example a run configuration from a parent project) now prompts for the target location rather than silently writing next to the original. ([#4248](https://github.com/apache/hop/issues/4248))
* **Metadata & projects:** Relative env file paths on a lifecycle environment are now resolved against the project home folder instead of the current working directory. ([#8012](https://github.com/apache/hop/issues/8012))
* **Metadata & projects:** The linter no longer writes results files; use the lint outputs (for example SARIF/JSON) if you relied on them. ([#8735](https://github.com/apache/hop/issues/8735))
* **Metadata & projects:** Some metadata type keys, and so their folder names under metadata/, changed to kebab-case. Objects in the old folders still load and move to the new folder the next time they are saved. Check version control, scripts or disabledGuiElements entries that use the old folder names or keys. ([#5597](https://github.com/apache/hop/issues/5597))
* **Hop Server & remote execution:** Execution JSON documents (e.g. from execution information locations / Hop Server) no longer contain parameterValues; tooling that read parameter values from that JSON must get them elsewhere. ([#8027](https://github.com/apache/hop/issues/8027))
* **Hop Server & remote execution:** Callers of ExecPipelineServlet that load pipelines from remote schemes may be refused; check integrations that pass such paths. ([#8373](https://github.com/apache/hop/issues/8373))
* **Hop Server & remote execution:** The standalone hop-rest module (and its Docker file) is merged into Hop Server. Deployments that ran hop-rest separately should use Hop Server's /hop/api/v1 endpoints instead. ([#8145](https://github.com/apache/hop/issues/8145))
* **Hop Run / CLI & containers:** Third-party library logging now goes through Log4j2 with Hop's default configuration; custom Log4j2 configurations can be supplied. ([#8374](https://github.com/apache/hop/issues/8374))
* **Hop Run / CLI & containers:** The short option for the projects in-memory configuration is -ime (long form --in-memory); -im now only means --include-metadata for hop doc. ([#8292](https://github.com/apache/hop/issues/8292))
* **Hop Run / CLI & containers:** HOP_CONFIG_OPTIONS is now word-split, so option values that contain spaces need quoting. ([#8299](https://github.com/apache/hop/issues/8299))
* **Plugins & integrations:** Beam source transforms now reject an enabled incoming hop (including an error hop). ([#8716](https://github.com/apache/hop/issues/8716))
* **Plugins & integrations:** Unit tests with a database replacement now run against the replacement connection instead of the original; test results may change. ([#8417](https://github.com/apache/hop/issues/8417), [#8520](https://github.com/apache/hop/issues/8520))
* **Plugins & integrations:** The Marketplace Environment tab and the lifecycle environment field are now labelled Hop install spec; file names on disk are unchanged. ([#8059](https://github.com/apache/hop/issues/8059), [#8103](https://github.com/apache/hop/issues/8103))
* **Security:** A project install spec that declares its own plugin repository without a username or password no longer inherits credentials from the globally configured repository; add credentials for that repository explicitly if it needs them. ([#8393](https://github.com/apache/hop/issues/8393), [#8398](https://github.com/apache/hop/issues/8398))
* **Security:** TLS verification is on unless explicitly turned off. Resolvers connecting to servers with self-signed or untrusted certificates may now fail; configure the trust store or deliberately disable verification. ([#8392](https://github.com/apache/hop/issues/8392))
* **Security:** Browser requests to Hop Server servlets that come from another site (Sec-Fetch-Site cross-site) are now rejected; integrations that call the servlets from web pages on another origin may need adjustment. Non-browser clients are not affected by this header check. ([#8371](https://github.com/apache/hop/issues/8371), [#8390](https://github.com/apache/hop/issues/8390))
* **Security:** With a hash secret configured, existing plain-text rows in the mapping table are moved to hashed keys, and a unique key is added on the masked value. Back up mapping tables before upgrading. ([#8791](https://github.com/apache/hop/issues/8791))
* **Security:** In Hop Web, /hop/* is now closed by default, including in authentication mode NONE (the /ui itself stays open). To run Hop Web as an execution server behind network controls, opt in with allowUnauthenticatedServerApi / HOP_WEB_ALLOW_UNAUTHENTICATED_SERVER_API. The EXTERNAL mode delegates authentication rather than enforcing it. ([#8150](https://github.com/apache/hop/issues/8150), [#8391](https://github.com/apache/hop/issues/8391))
* **Security:** XML Input Stream no longer processes DTDs or resolves external entities. ([#8163](https://github.com/apache/hop/issues/8163))
* **Security:** File names and arguments are no longer subject to shell expansion when running GnuPG. ([#8311](https://github.com/apache/hop/issues/8311), [#8316](https://github.com/apache/hop/issues/8316))
* **Security:** XSD validation no longer resolves external entities by default. Enable 'Allow external entities' in the dialog or via the system property if your schemas need them. ([#3270](https://github.com/apache/hop/issues/3270), [#8367](https://github.com/apache/hop/issues/8367), [#8368](https://github.com/apache/hop/issues/8368))
* **Documentation:** Links to the technical documentation manual move to the user or developer manual. ([#8188](https://github.com/apache/hop/issues/8188), [#8189](https://github.com/apache/hop/issues/8189))
:::

### Regressions from earlier releases, now fixed

If you held back an upgrade or used a workaround because of one of these, 2.20 fixes it.

* Pipelines: rows sent over an error hop are no longer logged at ERROR level; validator-only workarounds were removed. *(regression since 2.19)* ([#8125](https://github.com/apache/hop/issues/8125), [#8126](https://github.com/apache/hop/issues/8126))
* JSON Input: with ignore empty files enabled, an empty file no longer produces a row of null values. *(regression since 2.18)* ([#8071](https://github.com/apache/hop/issues/8071))
* REST Client: a disabled incoming hop no longer causes a validation error when Accept URL from field is enabled. *(regression since 2.19)* ([#8660](https://github.com/apache/hop/issues/8660))
* ETL Metadata Injection: values from lazy-conversion sources such as CSV Input are injected as text again instead of "[B@...", fixing errors like "Illegal pattern character 'B'". *(regression since 2.19)* ([#8812](https://github.com/apache/hop/issues/8812))
* Pipeline action: with 'Pass parameter values to sub pipeline' unchecked, a sub-pipeline's own named parameters are no longer silently overridden by same-named variables from the calling workflow. *(regression since 2.19)* ([#8084](https://github.com/apache/hop/issues/8084), [#8101](https://github.com/apache/hop/issues/8101))
* Several transforms and actions (including Add Constants, bulk loaders, Insert/Update, Update, Delete, Set Variables and file actions) handle empty and null values correctly again. *(regression since 2.18)* ([#8960](https://github.com/apache/hop/issues/8960), [#8962](https://github.com/apache/hop/issues/8962))
* JSON Output: input fields are no longer returned as NULL for the last partial block of rows. *(regression since 2.5)* ([#2958](https://github.com/apache/hop/issues/2958))
* Metadata perspective: empty metadata folders are no longer listed under the Unknown category. *(regression since 2.19)* ([#8225](https://github.com/apache/hop/issues/8225))
* Pipeline engine: restores pipeline throughput on Java 21, where rowset back-off between transforms had become a busy wait. *(regression since Hop on Java 21 (2.18 and later))* ([#8882](https://github.com/apache/hop/issues/8882))
* Databases: DECIMAL/NUMERIC columns are read with length and precision that DDL generation understands again, so generated table definitions are correct. *(regression since 2.19)* ([#8216](https://github.com/apache/hop/issues/8216))
* Text File Output: again inherits the date format mask and other value type settings of incoming fields. *(regression since 2.18)* ([#8956](https://github.com/apache/hop/issues/8956), [#8959](https://github.com/apache/hop/issues/8959))
* Wait for SQL: date columns added to the result set now reach Get rows from result with the right type, instead of 'Unknown type 0' errors or wrong values. *(regression since 2.2)* ([#2483](https://github.com/apache/hop/issues/2483), [#8086](https://github.com/apache/hop/issues/8086))
* REST Client: no charset is added to the Content-Type header unless the row sets the header itself (application/json instead of application/json; charset=UTF-8), which fixes APIs that rejected the request with HTTP 500. *(regression since 2.19 (worked in 2.17))* ([#8507](https://github.com/apache/hop/issues/8507))
* Copy files: Copy files no longer starts copying while it is still reading the source folder, so it behaves as in 2.16 again. *(regression since 2.18)* ([#8800](https://github.com/apache/hop/issues/8800))
* Transform/action search in the canvas context dialog filters by name again, instead of listing almost every transform for a term such as 'Select'. *(regression since 2.19)* ([#8756](https://github.com/apache/hop/issues/8756))
* Dialog tables: text is truncated only in data preview grids, not in regular dialog tables. *(regression since 2.19)* ([#8060](https://github.com/apache/hop/issues/8060))

## What's new by area

Every change in this release, grouped by the part of Hop it affects.

### Hop GUI

:::details[New and improved (67)]
* Database perspective: a new perspective with a tree of the project's relational database connections, a filter field and toolbar (connect, disconnect, refresh, new SQL editor, generate DDL, preview), and non-modal SQL editors. ([#8212](https://github.com/apache/hop/issues/8212))
* Linter: new linting engine with a basic rule set to check pipelines, workflows and metadata for code-quality issues such as default transform names or oversized canvases, available in Hop GUI and from the command line (hop lint). ([#3103](https://github.com/apache/hop/issues/3103), [#8199](https://github.com/apache/hop/issues/8199))
* New AI Assistant: a pluggable, off-by-default AI advisory system for pipelines and workflows, with named AI Provider metadata, a review step before changes are applied and undoable edits. ([#8330](https://github.com/apache/hop/issues/8330), [#8342](https://github.com/apache/hop/issues/8342), [#8757](https://github.com/apache/hop/issues/8757), [#8784](https://github.com/apache/hop/issues/8784), [#8860](https://github.com/apache/hop/issues/8860), [#8870](https://github.com/apache/hop/issues/8870), [#8543](https://github.com/apache/hop/issues/8543), [#8578](https://github.com/apache/hop/issues/8578))
* Configure Hop environment: new Tools menu dialog, first-start prompt and hop setup command help you set HOP_CONFIG_FOLDER, HOP_AUDIT_FOLDER, HOP_JAVA_HOME, HOP_OPTIONS and HOP_SHARED_JDBC_FOLDERS outside the install folder, including on Windows. ([#7940](https://github.com/apache/hop/issues/7940), [#8087](https://github.com/apache/hop/issues/8087))
* Explorer perspective: opening a .parquet or .parq file shows a read-only preview tab with the file details, the schema and the first 1000 rows. ([#8614](https://github.com/apache/hop/issues/8614), [#8619](https://github.com/apache/hop/issues/8619))
* Pipeline and workflow editors: an optional Spoon-style palette tree on the left lists transforms and actions by category, with filter and favorites; toggled from the toolbar and hidden by default. ([#7114](https://github.com/apache/hop/issues/7114), [#8044](https://github.com/apache/hop/issues/8044))
* Pipeline editor: a new Create mapping action turns a chain of selected transforms into a new mapping pipeline and replaces them with a Simple Mapping transform. ([#2728](https://github.com/apache/hop/issues/2728))
* SQL and script editors: multi-line text editors (Table Input, Execute SQL script and others) get a toolbar with undo/redo, cut/copy/paste and Find / Find and Replace (Ctrl+F / Ctrl+H). ([#7456](https://github.com/apache/hop/issues/7456), [#7907](https://github.com/apache/hop/issues/7907))
* VFS File Explorer: new Tools > VFS File Explorer browses any Commons VFS location, including named connections outside the project, as a window or docked in the bottom panel. ([#8503](https://github.com/apache/hop/issues/8503), [#8527](https://github.com/apache/hop/issues/8527))
* Bottom panel: terminal, search, database and VFS explorer now share one tabbed bottom panel, the embedded terminal can be disabled, and the terminal cursor follows the theme colours. ([#8486](https://github.com/apache/hop/issues/8486), [#8642](https://github.com/apache/hop/issues/8642))
* Data preview / Show rows: rows can be filtered by column values via a right-click on the column header, with a list of distinct values to pick from. ([#8941](https://github.com/apache/hop/issues/8941), [#8983](https://github.com/apache/hop/issues/8983))
* Database connections: the connection editor has an Open in Database button that opens the connection in the Database perspective with a SQL tab, and the connection metadata can be opened from the Database perspective. ([#8361](https://github.com/apache/hop/issues/8361))
* Diagram export: exporting diagrams is now plugin-based, and pipelines and workflows can be exported as SVG or Mermaid; plugins can add more formats and export other editors. ([#8346](https://github.com/apache/hop/issues/8346))
* Explorer content editor (Open as text, JSON, YAML, SQL, XML, logs, Markdown): adds Find and Find/Replace, and a pretty-print button for JSON files. ([#7903](https://github.com/apache/hop/issues/7903), [#7947](https://github.com/apache/hop/issues/7947), [#7935](https://github.com/apache/hop/issues/7935), [#7937](https://github.com/apache/hop/issues/7937))
* File Explorer: the context menu can now create a pipeline, workflow or file (JSON, TXT, XML, YAML, SQL, Python) directly in a folder. ([#8135](https://github.com/apache/hop/issues/8135), [#8190](https://github.com/apache/hop/issues/8190))
* Help: help pages can open in a modeless dialog on top of the current transform, action or metadata dialog. A new 'Open help pages in' setting chooses between external browser, Hop GUI tab and dialog window. ([#8098](https://github.com/apache/hop/issues/8098))
* Notes and Markdown files: new editing toolbar for links, images, bold, italic, headings, code blocks and tables. ([#8833](https://github.com/apache/hop/issues/8833))
* Pipeline and workflow canvas (Hop GUI and Hop Web): a new option uses right-click menus instead of the context dialog, transform/action names show a 'Click to edit' tooltip, and all canvas tooltips can be configured. ([#8478](https://github.com/apache/hop/issues/8478), [#8494](https://github.com/apache/hop/issues/8494), [#8532](https://github.com/apache/hop/issues/8532))
* Pipeline and workflow editors: undo and redo are more reliable because they now restore full snapshots of the document. ([#8037](https://github.com/apache/hop/issues/8037))
* Pipeline editor: row distribution options (such as copy) can now be set from the hop itself, not only from the source transform. ([#2347](https://github.com/apache/hop/issues/2347))
* Pipelines and workflows: new Revisions tab listing the Git history of the file, with comparison against earlier revisions. ([#8754](https://github.com/apache/hop/issues/8754))
* Table views (including data preview): save and apply named column views to show a chosen subset of columns in a chosen order. ([#7891](https://github.com/apache/hop/issues/7891))
* Table views: new Find value dialog to search for a value across selected columns, with case-sensitive and regular expression options. ([#8621](https://github.com/apache/hop/issues/8621))
* Canvas clicks: when the transform/action palette tree is shown, clicking empty canvas only offers pipeline/workflow actions instead of the list of transforms/actions; right click no longer behaves like a left click. ([#8443](https://github.com/apache/hop/issues/8443), [#8450](https://github.com/apache/hop/issues/8450))
* Database explorer: new search filter with optional wildcards, database type icons, toolbar Refresh, double-click expand/collapse and a cleaner layout without the large buttons. ([#5376](https://github.com/apache/hop/issues/5376))
* Database perspective: the table and view information dialog also shows each column's type as defined in the database (for example varchar(100), bigint, timestamp(6)). ([#8464](https://github.com/apache/hop/issues/8464))
* Execution Information perspective: failed and stalled pipelines and workflows now get their own error and stalled icons in the tree and viewer tabs, in addition to the existing background tint. ([#2267](https://github.com/apache/hop/issues/2267), [#7951](https://github.com/apache/hop/issues/7951))
* Execution Information perspective: several executions can be deleted at once with a cancellable progress dialog, and deleting a location now removes all executions. ([#8820](https://github.com/apache/hop/issues/8820), [#8827](https://github.com/apache/hop/issues/8827))
* File Explorer: Markdown files get syntax support and a live preview. ([#7876](https://github.com/apache/hop/issues/7876))
* Git integration: Hop GUI no longer freezes for seconds when opening or switching projects, or on editor clicks, in large git repositories, because the repository status no longer runs on the UI thread. ([#6216](https://github.com/apache/hop/issues/6216), [#8887](https://github.com/apache/hop/issues/8887))
* Git perspective: tags can now be pushed to the remote. ([#7880](https://github.com/apache/hop/issues/7880), [#7888](https://github.com/apache/hop/issues/7888))
* Git perspective: you can create branches from tags and delete or rename remote branches. ([#7887](https://github.com/apache/hop/issues/7887), [#7996](https://github.com/apache/hop/issues/7996))
* Hop GUI: a notification system to tell users about events such as new versions being available. ([#6188](https://github.com/apache/hop/issues/6188))
* Lint: expected findings can be marked as ignored, for example in template pipelines whose fields are only injected at runtime through Metadata Injection. ([#8255](https://github.com/apache/hop/issues/8255), [#8268](https://github.com/apache/hop/issues/8268))
* Multi-line text fields: Tab and Shift+Tab indent or outdent the selected lines. The width is 2 spaces by default and can be set with HOP_TEXT_TAB_SIZE. ([#8653](https://github.com/apache/hop/issues/8653))
* Open execution: hover a transform/action and press x, or Alt-click it, to open its running child execution (Pipeline/Workflow Executor, Mapping, Metadata Injection, Pipeline, Workflow, Repeat, ...). ([#8605](https://github.com/apache/hop/issues/8605), [#8610](https://github.com/apache/hop/issues/8610))
* Pipeline Executor, Workflow Executor, Simple Mapping, Multi Mapping and similar dialogs: a new Open button beside Browse opens the referenced pipeline or workflow directly. ([#5275](https://github.com/apache/hop/issues/5275))
* Pipeline and workflow canvas: keyboard navigation around large canvases and some shortcuts fixed. ([#7848](https://github.com/apache/hop/issues/7848), [#7895](https://github.com/apache/hop/issues/7895))
* Pipeline canvas: the finished check is shown only when every copy of a transform is done; while copies run, the number of finished copies is shown. ([#8501](https://github.com/apache/hop/issues/8501))
* Plugin dialogs: a new data-grid GUI annotation lets transforms, actions and metadata dialogs declare table grids (text, combo and checkbox columns) instead of hand-building them. ([#2286](https://github.com/apache/hop/issues/2286))
* Plugin dialogs: annotated dialogs can arrange their fields in tabs or stacked boxes, so large editors (for example run configurations) resize and scroll and keep OK/Cancel visible. ([#8016](https://github.com/apache/hop/issues/8016), [#8117](https://github.com/apache/hop/issues/8117))
* Script editors (User Defined Java Class, JavaScript, Java Filter, Formula and others): Ctrl+Z undoes inside the editor and Ctrl+Y redoes, instead of undoing the pipeline. ([#4940](https://github.com/apache/hop/issues/4940))
* Search: new Project > Search projects... entry searches all configured projects, and the search dialog shows which location is being searched. ([#6146](https://github.com/apache/hop/issues/6146))
* Unit tests: with a unit test active, you can remove or bypass a selection of transforms in one bulk action. ([#5371](https://github.com/apache/hop/issues/5371))
* Auto layout: transforms, actions and notes are now placed on the canvas grid, so moving them afterwards keeps them aligned. ([#7569](https://github.com/apache/hop/issues/7569), [#8747](https://github.com/apache/hop/issues/8747))
* Database perspective: SQL editor tabs no longer overwrite each other when floated or docked, table preview uses the correct TOP/FIRST/LIMIT clause per database, and failed connects and SQL runs are logged and reported. ([#8277](https://github.com/apache/hop/issues/8277), [#8278](https://github.com/apache/hop/issues/8278))
* File Explorer: several files and folders can be deleted at once, with a check on existing folders. ([#8193](https://github.com/apache/hop/issues/8193))
* File explorer: a git clean option is available for files and folders. ([#7774](https://github.com/apache/hop/issues/7774))
* Git commit perspective: untracked files are shown in a separate Untracked tree instead of in the Unstaged tree. ([#7901](https://github.com/apache/hop/issues/7901))
* Hop GUI: the new profile selector at the top of the desktop client can be hidden. ([#7959](https://github.com/apache/hop/issues/7959), [#7967](https://github.com/apache/hop/issues/7967))
* Icons: database type icons in the Database perspective, a Favorites icon in the palette, a distinct Get files from result icon, and better notification and MariaDB icons in dark mode. ([#8318](https://github.com/apache/hop/issues/8318), [#8201](https://github.com/apache/hop/issues/8201), [#6122](https://github.com/apache/hop/issues/6122))
* Kettle import: the Import summary (and the hop-import report) now reports skipped files separately when 'Skip existing target files' is selected. ([#4500](https://github.com/apache/hop/issues/4500), [#8692](https://github.com/apache/hop/issues/8692))
* Linter: follow-up polish for the new linter: no false warnings on Check DB Connections, Hop's own verify checks can be addressed individually, password values are hidden in findings, the Problems tab survives detaching and lists whole-file remarks first, every field offered for connection/transform/action rules now resolves, and the rule editor and Rules Manager validate and keep their values correctly. ([#8295](https://github.com/apache/hop/issues/8295), [#8536](https://github.com/apache/hop/issues/8536), [#8590](https://github.com/apache/hop/issues/8590), [#8730](https://github.com/apache/hop/issues/8730), [#8737](https://github.com/apache/hop/issues/8737), [#8736](https://github.com/apache/hop/issues/8736), [#8741](https://github.com/apache/hop/issues/8741), [#8815](https://github.com/apache/hop/issues/8815), [#8825](https://github.com/apache/hop/issues/8825), [#8871](https://github.com/apache/hop/issues/8871), [#8877](https://github.com/apache/hop/issues/8877))
* Look & Feel: removed the Default font and Note font options, which had no effect; the fixed-width and workspace fonts remain. ([#2301](https://github.com/apache/hop/issues/2301), [#8068](https://github.com/apache/hop/issues/8068))
* Pipeline and workflow canvas: a new visualisation plugin type (for example for standardised note types) was addressed in this milestone; details to be confirmed. ([#6593](https://github.com/apache/hop/issues/6593))
* Pipeline and workflow canvas: lint error and warning icons moved to the bottom left, with sharper, consistent icons and a new icon for comment results. ([#8345](https://github.com/apache/hop/issues/8345), [#8460](https://github.com/apache/hop/issues/8460))
* Pipeline unit tests: attaching an input or golden data set shows a notice that the transform is replaced during the test, and Number/BigNumber golden data is compared using the field's length and precision. ([#2664](https://github.com/apache/hop/issues/2664))
* Pipeline unit tests: managing and selecting test pipelines is easier in projects with many unit tests. ([#7890](https://github.com/apache/hop/issues/7890))
* SQL editor: generated DDL and suggested SQL no longer mark the tab as changed, so closing it does not prompt to save text you did not type. ([#8942](https://github.com/apache/hop/issues/8942), [#8944](https://github.com/apache/hop/issues/8944))
* SQL formatting: more Calcite SQL format options are available. ([#8337](https://github.com/apache/hop/issues/8337), [#8338](https://github.com/apache/hop/issues/8338))
* Database connections: Databricks, H2 and Exasol now have their own icons. ([#8183](https://github.com/apache/hop/issues/8183))
* Encoding drop-downs: now have an empty option at the top. ([#7938](https://github.com/apache/hop/issues/7938))
* File Explorer perspective: the tree scrolls while dragging a file near its top or bottom edge. ([#8855](https://github.com/apache/hop/issues/8855), [#8856](https://github.com/apache/hop/issues/8856))
* Hop GUI: new icons for Find and Find and Replace. ([#7974](https://github.com/apache/hop/issues/7974), [#7975](https://github.com/apache/hop/issues/7975))
* JMS Consumer and JMS Producer: new transform icons. ([#7986](https://github.com/apache/hop/issues/7986))
* Metadata view: the redundant New button is removed. ([#8466](https://github.com/apache/hop/issues/8466))
* Terminal and execution panel: toolbars use the same colour as the rest of the interface. ([#8134](https://github.com/apache/hop/issues/8134))
:::

:::details[Fixed (70)]
* About dialog: opens quickly on Windows. ([#8816](https://github.com/apache/hop/issues/8816))
* Closing a changed file: Cancel in the save prompt keeps the file open. ([#8079](https://github.com/apache/hop/issues/8079), [#8090](https://github.com/apache/hop/issues/8090))
* Configuration perspective: opening the Search plugin options no longer fails with an error. ([#8010](https://github.com/apache/hop/issues/8010))
* Context dialog: with right-click context menu enabled on Windows, mouse hover selects items again. ([#8760](https://github.com/apache/hop/issues/8760))
* Context menus: action filters no longer log a null GUI plugin while filtering. ([#8804](https://github.com/apache/hop/issues/8804), [#8805](https://github.com/apache/hop/issues/8805))
* Database connection editor: changing the connection type (for example MySQL to MariaDB) keeps the hostname, database name, username and password. ([#8357](https://github.com/apache/hop/issues/8357))
* Database drivers: a JDBC driver downloaded from the GUI is loaded again after restarting Hop. ([#8133](https://github.com/apache/hop/issues/8133), [#8141](https://github.com/apache/hop/issues/8141))
* Database perspective: SQL editor tabs no longer overwrite each other when floated or docked, table preview uses the right row-limit syntax, errors are shown, and results follow the binary hex-preview setting with data type tooltips. ([#8278](https://github.com/apache/hop/issues/8278), [#8279](https://github.com/apache/hop/issues/8279))
* Database perspective: SQL editors pick up changes to a connection's metadata instead of using the old connection details. ([#8375](https://github.com/apache/hop/issues/8375))
* Database perspective: SQL editors restored at startup are no longer marked as changed and no longer ask to be saved. ([#8366](https://github.com/apache/hop/issues/8366))
* Database perspective: saved SQL editors are restored only in the Database perspective at startup and no longer also open in the File Explorer. ([#9050](https://github.com/apache/hop/issues/9050))
* Database perspective: the connection filter is cleared when you switch projects, so connections no longer seem to be missing. ([#8453](https://github.com/apache/hop/issues/8453))
* Dialog tables: text is truncated only in data preview grids, not in regular dialog tables. ([#8060](https://github.com/apache/hop/issues/8060))
* Dialogs: label/control spacing fixed in Load file content in memory, Get table names, Get file names, Database join and Write to log; Get file names also clears the exclude mask after Add. ([#8065](https://github.com/apache/hop/issues/8065), [#8137](https://github.com/apache/hop/issues/8137), [#8205](https://github.com/apache/hop/issues/8205), [#8655](https://github.com/apache/hop/issues/8655), [#8665](https://github.com/apache/hop/issues/8665))
* Execution Data Profile editor: the sampler list and options are visible again instead of being covered by the Large values box. ([#9022](https://github.com/apache/hop/issues/9022), [#9023](https://github.com/apache/hop/issues/9023))
* Execution Information perspective: opening a workflow execution no longer fails with a NullPointerException. ([#8601](https://github.com/apache/hop/issues/8601))
* Execution Information perspective: you can now drag the minimap viewport (and click the minimap) to navigate the canvas, in both Hop GUI and Hop Web. ([#3119](https://github.com/apache/hop/issues/3119), [#7932](https://github.com/apache/hop/issues/7932))
* Execution Information perspective: you can view the execution details and sampled data of pipelines referenced in execution information again, and the parent execution links work. ([#8670](https://github.com/apache/hop/issues/8670))
* Execution Information: execution records with large sampled-row data now open instead of showing no data. ([#3745](https://github.com/apache/hop/issues/3745))
* Execution results panel: detaching or docking it keeps the tab you were looking at. ([#8874](https://github.com/apache/hop/issues/8874))
* Execution results: improved spacing in the Logging toolbar and alignment of the panel's top-right buttons. ([#8140](https://github.com/apache/hop/issues/8140))
* Explorer perspective: Git buttons and actions work again (broken during the 2.20 development cycle). ([#8669](https://github.com/apache/hop/issues/8669))
* File Explorer perspective: a file no longer disappears from the tree after a Git commit. ([#8377](https://github.com/apache/hop/issues/8377))
* File Explorer: 'Find references' and updating references after renaming a pipeline, workflow or folder now work on Windows. ([#8062](https://github.com/apache/hop/issues/8062), [#8067](https://github.com/apache/hop/issues/8067), [#8111](https://github.com/apache/hop/issues/8111), [#8161](https://github.com/apache/hop/issues/8161), [#8167](https://github.com/apache/hop/issues/8167))
* Filter fields: the typed filter value is visible again. ([#8596](https://github.com/apache/hop/issues/8596))
* Get Variables: the variable selection shortcut works on macOS, where Cmd+Space is taken by Spotlight. ([#8261](https://github.com/apache/hop/issues/8261))
* Git commit perspective: committing during a merge no longer aborts the merge or clears the index on failure. ([#8001](https://github.com/apache/hop/issues/8001), [#8004](https://github.com/apache/hop/issues/8004))
* Git perspective: 'Revert file' and 'Cherry-pick file' no longer commit the whole index. ([#8003](https://github.com/apache/hop/issues/8003), [#8007](https://github.com/apache/hop/issues/8007))
* Git perspective: merging a tag that has conflicts no longer shows a NullPointerException, and annotated tags no longer fail halfway. ([#8937](https://github.com/apache/hop/issues/8937))
* Help buttons: the Data Stream, Web Service, Kettle Import and S3 Help buttons open existing documentation pages, and the broken Surefire Report help link is removed. ([#8975](https://github.com/apache/hop/issues/8975))
* Hop GUI: clicking a cell in a read-only grid now selects the row and keeps the grid's context menu available instead of opening an inline editor. ([#8360](https://github.com/apache/hop/issues/8360), [#8530](https://github.com/apache/hop/issues/8530))
* Hop GUI: opening a transform or action dialog and clicking OK without changes no longer marks the pipeline or workflow as changed. ([#8247](https://github.com/apache/hop/issues/8247))
* Hop GUI: toolbar, tree and canvas icons are sharp again on Windows at 200% display scaling. ([#7955](https://github.com/apache/hop/issues/7955))
* Import from Kettle/PDI: Simple Mapping steps now import with the referenced pipeline file name set. ([#4119](https://github.com/apache/hop/issues/4119))
* Import from Kettle/PDI: importing into a folder no longer changes '${PROJECT_HOME}' and related project variables of the active project. ([#2865](https://github.com/apache/hop/issues/2865))
* Kafka Consumer: pipeline metrics keep updating after stopping and restarting the pipeline. ([#8546](https://github.com/apache/hop/issues/8546))
* Lint: Show Lint Results no longer lists findings from the previous project after you switch projects. ([#8774](https://github.com/apache/hop/issues/8774))
* Lint: closing Show Lint Results no longer fills the log with 'Widget is disposed' errors on later lint updates. ([#8872](https://github.com/apache/hop/issues/8872))
* Lint: switching the linter off clears Explorer markers and stops linting on open or edit, and the SQL, Shell and Set Variables actions are checked against the source they actually use (file or script), which removes false positives. ([#8521](https://github.com/apache/hop/issues/8521))
* Metadata perspective: empty metadata folders are no longer listed under the Unknown category. ([#8225](https://github.com/apache/hop/issues/8225))
* Metadata perspective: pipeline and workflow run configurations restored on project open are no longer marked as changed. ([#8758](https://github.com/apache/hop/issues/8758))
* Neo4j execution information location: selecting a graph connection no longer logs an error and the edit button shows its icon. ([#8986](https://github.com/apache/hop/issues/8986), [#8987](https://github.com/apache/hop/issues/8987))
* Notes: images in notes render reliably when the note is resized on Windows. ([#8869](https://github.com/apache/hop/issues/8869))
* Notes: the background colour chosen for a note is applied again. ([#6511](https://github.com/apache/hop/issues/6511))
* Notifications: background notification polling no longer floods the console and log with HTTP wire-level debug output. ([#8340](https://github.com/apache/hop/issues/8340))
* Palette: transform and action icons are no longer pixelated or distorted, notably on Windows with display scaling. ([#8057](https://github.com/apache/hop/issues/8057))
* Pipeline canvas: releasing the mouse on a data badge after moving transforms no longer opens the output rows window. ([#8595](https://github.com/apache/hop/issues/8595), [#8616](https://github.com/apache/hop/issues/8616))
* Pipeline editor: Hop refuses a hop from Filter Rows, Switch/Case and similar target-stream transforms to a transform that runs in multiple copies, including when that transform is dropped onto an existing hop. ([#4010](https://github.com/apache/hop/issues/4010))
* Pipeline metrics: the grid no longer flickers by resizing columns on every refresh, manual column widths are kept, and column resize controls were added. ([#8147](https://github.com/apache/hop/issues/8147), [#8174](https://github.com/apache/hop/issues/8174))
* Pipeline run configuration editor: engine configurations with many options (for example Beam) scroll again. ([#8624](https://github.com/apache/hop/issues/8624))
* Preview data: grid sizing on Linux fixed so long text values no longer make the preview unwieldy. ([#8155](https://github.com/apache/hop/issues/8155), [#8171](https://github.com/apache/hop/issues/8171))
* Problems tab: a new Force refresh button clears the database cache so remarks about missing columns update once the columns exist. ([#8657](https://github.com/apache/hop/issues/8657), [#8940](https://github.com/apache/hop/issues/8940))
* Progress dialogs: progress dialogs close when the work finishes, even if the task never reported that it was done. ([#8227](https://github.com/apache/hop/issues/8227))
* Projects: entries that Hop adds to .gitignore start on a new line. ([#8002](https://github.com/apache/hop/issues/8002))
* Projects: switching projects no longer shows an error dialog for every opened pipeline or workflow. ([#8662](https://github.com/apache/hop/issues/8662))
* Run Options dialog: the Launch button has focus, so F8 followed by Enter or Space starts the run. ([#8114](https://github.com/apache/hop/issues/8114))
* Table Input and other database dialogs: the Clear cache button now reliably clears the database cache. ([#3312](https://github.com/apache/hop/issues/3312), [#8541](https://github.com/apache/hop/issues/8541))
* Table editors: cells with a helper button stay editable inline when the value contains a line break, so the button can still be reached. ([#8861](https://github.com/apache/hop/issues/8861))
* Text editors: syntax highlighting now displays correctly on Windows, and .log, .gitignore and extension-less files show correctly in dark mode. ([#7926](https://github.com/apache/hop/issues/7926), [#7971](https://github.com/apache/hop/issues/7971))
* Text fields: Ctrl+A / Cmd+A selects all text in single- and multi-line fields again in Hop GUI and Hop Web. On the canvas it still selects the graph. ([#8606](https://github.com/apache/hop/issues/8606))
* Text fields: Ctrl/Cmd+Left/Right and Option+Right move by word again instead of triggering canvas align/distribute actions, in Hop GUI and Hop Web. ([#8362](https://github.com/apache/hop/issues/8362))
* Transform/action search in the canvas context dialog filters by name again, instead of listing almost every transform for a term such as 'Select'. ([#8756](https://github.com/apache/hop/issues/8756))
* Unit tests: creating a test pipeline no longer freezes Hop GUI while resolving the output fields of transforms that use variables. ([#8203](https://github.com/apache/hop/issues/8203))
* VFS File Explorer: hardening before release, including write-permission checks on Hop Web (issue closed in this milestone). ([#8873](https://github.com/apache/hop/issues/8873))
* Variable tooltip: removed an outdated OSX-specific reference. ([#8269](https://github.com/apache/hop/issues/8269))
* Variables: HOP_ZIP_MAX_ENTRY_SIZE shows its default (4294967295) and description, and the internal helper variable no longer appears in the list. ([#4484](https://github.com/apache/hop/issues/4484))
* Workflow verification: check results shown on save are now presented the same way as with 'Verify this workflow' (F7). ([#8465](https://github.com/apache/hop/issues/8465), [#8476](https://github.com/apache/hop/issues/8476))
* Write to log: Boolean fields are shown the same way regardless of their source (for example JSON or a database string). ([#5958](https://github.com/apache/hop/issues/5958))
* macOS 27: icons in menus are shown again. ([#9074](https://github.com/apache/hop/issues/9074), [#9075](https://github.com/apache/hop/issues/9075))
* New workflows created from the File Explorer context menu contain a Start action again, as with File > New. ([#9091](https://github.com/apache/hop/issues/9091), [#9092](https://github.com/apache/hop/issues/9092))
:::

### Hop Web

:::details[New and improved (10)]
* Hop Web: new File Browser menu to create, upload, download and export pipelines, workflows and projects using the browser's own file handling. ([#8276](https://github.com/apache/hop/issues/8276))
* Hop Web: in OAUTH2 mode the /hop/* endpoints accept an Authorization: Bearer token, so API clients such as curl, CI jobs and JDBC drivers can authenticate, and short-lived JDBC tokens can be issued. ([#8333](https://github.com/apache/hop/issues/8333))
* Hop Web: performance improvements greatly reduce the grey full-screen wait overlay when opening transforms, dialogs and running pipelines. ([#8435](https://github.com/apache/hop/issues/8435), [#8442](https://github.com/apache/hop/issues/8442))
* Hop Web: a loading splash is shown while the workspace starts. ([#8112](https://github.com/apache/hop/issues/8112))
* Hop Web: context (action) dialogs are rendered as vector SVG, making them crisper and faster. ([#8326](https://github.com/apache/hop/issues/8326))
* Hop Web: spacing, margins and padding tightened to match desktop Hop GUI. ([#8461](https://github.com/apache/hop/issues/8461), [#8462](https://github.com/apache/hop/issues/8462))
* Hop Web: tabs can be split and moved with drag and drop. ([#8499](https://github.com/apache/hop/issues/8499))
* Hop Web: multi-factor authentication for logins was addressed under this milestone (see the issue for what is supported). ([#3105](https://github.com/apache/hop/issues/3105))
* Hop Web: the 'Move to right' tab menu option is now available in the explorer perspective. ([#8458](https://github.com/apache/hop/issues/8458))
* Hop Web: tree view icons are sharp instead of blurry. ([#8434](https://github.com/apache/hop/issues/8434))
:::

:::details[Fixed (20)]
* Hop Web File Explorer: HTML files open with their stylesheets, images and relative links, and PDFs open in the browser. ([#8297](https://github.com/apache/hop/issues/8297))
* Hop Web File Explorer: an invalid drag-and-drop target no longer throws an exception that ends the session. ([#7933](https://github.com/apache/hop/issues/7933))
* Hop Web: AI Advisor no longer causes a servlet error when launching Hop Web. ([#8350](https://github.com/apache/hop/issues/8350))
* Hop Web: Chinese, Japanese and Korean transform and action names render with correct spacing on the canvas. ([#8528](https://github.com/apache/hop/issues/8528))
* Hop Web: GUI state is separated per browser session, which fixes 'Invalid thread access' and disposed-widget errors when several users work at the same time. ([#8047](https://github.com/apache/hop/issues/8047))
* Hop Web: Git perspectives are isolated per user session, fixing 'Invalid thread access' errors and cross-session leaks on Explorer refresh. ([#8251](https://github.com/apache/hop/issues/8251), [#8365](https://github.com/apache/hop/issues/8365))
* Hop Web: Paste availability no longer depends on reading the clipboard, avoiding session instability. ([#8498](https://github.com/apache/hop/issues/8498), [#8513](https://github.com/apache/hop/issues/8513))
* Hop Web: background threads that watch for Cancel in database dialogs now terminate (issue closed in this milestone). ([#8228](https://github.com/apache/hop/issues/8228))
* Hop Web: dialog Help buttons are now aligned with the OK/Cancel buttons. ([#8181](https://github.com/apache/hop/issues/8181))
* Hop Web: enabling a project no longer fails while saving or restoring GUI state before the perspectives are initialized. ([#8477](https://github.com/apache/hop/issues/8477))
* Hop Web: existing metadata items can be opened again. ([#8151](https://github.com/apache/hop/issues/8151))
* Hop Web: fixed 'invalid thread access' errors when opening and closing transform dialogs. ([#8195](https://github.com/apache/hop/issues/8195), [#8197](https://github.com/apache/hop/issues/8197))
* Hop Web: layout tweaks to the AI Advisor panel. ([#8351](https://github.com/apache/hop/issues/8351))
* Hop Web: no more repeated GetFieldsExtension NullPointerException errors in the server log when no browser session is available. ([#8248](https://github.com/apache/hop/issues/8248))
* Hop Web: opening a dialog or another graph over an editor tab no longer leaves the background graph blank. ([#8432](https://github.com/apache/hop/issues/8432), [#8439](https://github.com/apache/hop/issues/8439))
* Hop Web: the Logging tab refreshes while a pipeline or workflow runs, without needing a click or resize. ([#8327](https://github.com/apache/hop/issues/8327), [#8344](https://github.com/apache/hop/issues/8344))
* Hop Web: the Stanford NLP icon no longer renders too large in the context dialog. ([#8437](https://github.com/apache/hop/issues/8437))
* Hop Web: the lint plugin is now session aware, and Lint/Explorer icons no longer log repeated 'factory-created resource' errors. ([#8232](https://github.com/apache/hop/issues/8232), [#8249](https://github.com/apache/hop/issues/8249))
* Hop Web: the pipeline/workflow canvas overlay attaches to the correct widget, fixing blank graphs. ([#8286](https://github.com/apache/hop/issues/8286), [#8290](https://github.com/apache/hop/issues/8290))
* Hop Web: the workflow canvas no longer goes blank after floating the results panel. ([#8281](https://github.com/apache/hop/issues/8281))
:::

### Transforms

:::details[New and improved (59)]
* Embed Text: new transform that turns text into embedding vectors using an AI Provider, completing the chunk-embed-store retrieval chain; AI Provider metadata now holds chat, embedding and reranker models. ([#8441](https://github.com/apache/hop/issues/8441))
* Lake table input and Lake table output: read and write Apache Iceberg tables on the local and remote Hop engine without Spark. ([#8802](https://github.com/apache/hop/issues/8802), [#8819](https://github.com/apache/hop/issues/8819), [#8859](https://github.com/apache/hop/issues/8859))
* Text File Input: can read large files in parallel and faster, especially from S3, Azure and Google Cloud Storage, and copies of the transform can now split the work on one large file between them. ([#8943](https://github.com/apache/hop/issues/8943))
* Database value validation: new transform that checks incoming rows against a target table before insert (string length, precision, encoding and similar) and points to the offending field and value instead of failing on the first database error. ([#8143](https://github.com/apache/hop/issues/8143), [#8148](https://github.com/apache/hop/issues/8148))
* Git Input: a new transform and Git connection metadata type that read commits, commit files, issues, pull requests, comments and issue events from GitHub, GitLab, Bitbucket, Forgejo and Gitea, or from a local clone, all in one common row layout. ([#8314](https://github.com/apache/hop/issues/8314))
* Mask fields: new transform that masks PII values using reusable Masking pattern metadata (prefix/sequence or UUID/suffix tokens, values from an info stream, null or blank), optionally remembering the mapping for one run or across runs in a database table. ([#2582](https://github.com/apache/hop/issues/2582))
* Multi Mapping: a new transform that brings back the PDI/Kettle Mapping behaviour, with zero, one or many inputs and outputs plus info and target hops for the sub-pipeline. ([#7953](https://github.com/apache/hop/issues/7953))
* New Microsoft SQL Server Bulk Loader transform. ([#8051](https://github.com/apache/hop/issues/8051), [#8053](https://github.com/apache/hop/issues/8053))
* OpenFormula: new transform that evaluates Kettle/PDI formula syntax quickly without Apache POI; the existing Formula transform is unchanged. ([#8907](https://github.com/apache/hop/issues/8907))
* Parquet File Output: Hive-style partitioned writes (for example year=2026/month=08/) on one or more incoming fields, without needing the Spark engine. ([#8080](https://github.com/apache/hop/issues/8080))
* Structured extract: a new transform uses a language model to read typed fields (dates, amounts, categories) out of text, configured through a field grid. ([#8511](https://github.com/apache/hop/issues/8511))
* Text chunker: a new transform that splits long text into passages for embedding and retrieval. The paragraph strategy can also split on a custom multi-character separator. ([#8415](https://github.com/apache/hop/issues/8415), [#8740](https://github.com/apache/hop/issues/8740))
* Watch Files: new source transform that detects file arrivals, changes and deletions in a directory, with stable-file checks and persistent state. ([#8788](https://github.com/apache/hop/issues/8788))
* pgvector upsert and pgvector search: new optional transforms write text chunks with embeddings to PostgreSQL pgvector and run top-k similarity lookups. ([#8422](https://github.com/apache/hop/issues/8422))
* Bulk loaders: Binary fields (hash keys, raw bytes) can now be bulk loaded on all bulk loaders whose database supports it, instead of failing with 'doesn't handle the type Binary'. ([#8154](https://github.com/apache/hop/issues/8154))
* Call DB Procedure: a new 'Row' result type outputs one row per row of the procedure's first result set over JDBC. ([#4858](https://github.com/apache/hop/issues/4858), [#8693](https://github.com/apache/hop/issues/8693))
* Database Join: SQL can use named placeholders ?{fieldName} bound by incoming field name, mixed with positional ? placeholders. ([#8339](https://github.com/apache/hop/issues/8339))
* Enhanced JSON Output: output is streamed to the file, so writing files larger than available memory no longer runs out of memory. ([#2929](https://github.com/apache/hop/issues/2929), [#8713](https://github.com/apache/hop/issues/8713))
* Enhanced JSON Output: writes the file as rows arrive and adds a separate newline-delimited JSON file option; JSON Input corrections from umbrella issue #8711. ([#8715](https://github.com/apache/hop/issues/8715))
* Execute SQL script: the script can now be loaded from a SQL file (VFS paths and variables supported), and the dialog is reorganized onto three tabs with its layout issues fixed. ([#7151](https://github.com/apache/hop/issues/7151), [#7923](https://github.com/apache/hop/issues/7923))
* Formula: many formulas are now evaluated without Apache POI, making them faster; a system property can disable this optimization. ([#8304](https://github.com/apache/hop/issues/8304))
* Messaging: adds support for other message queues besides Kafka, such as AMQP brokers (RabbitMQ, ActiveMQ). ([#2653](https://github.com/apache/hop/issues/2653))
* Output transform metrics: a new transform, ported from PDI's Output steps metrics, that waits for the listed transforms to finish and then outputs one metrics row per copy (line counters, rejected rows, duration). ([#3003](https://github.com/apache/hop/issues/3003))
* Parquet Output: each field can set a Parquet logical type (for example DATE, or Decimal with precision and scale), so dates import into BigQuery correctly. ([#3864](https://github.com/apache/hop/issues/3864))
* Pipeline Executor: new retry options to re-run a failed child pipeline execution, e.g. after an expired API token. ([#8544](https://github.com/apache/hop/issues/8544))
* Plugin Catalog: a new transform that outputs the installation's plugin registry as rows, including Marketplace and third-party plugins, with resolved labels. ([#8403](https://github.com/apache/hop/issues/8403))
* Add Sequence: with the pipeline counter, start value, increment and maximum can be read from a single row on an info hop (for example from a preceding max() query). ([#5193](https://github.com/apache/hop/issues/5193), [#8696](https://github.com/apache/hop/issues/8696))
* Calculator: new calculations convert JD Edwards Julian dates (CYYDDD) to and from Hop dates. ([#2584](https://github.com/apache/hop/issues/2584))
* Database Join: SQL can be loaded from an external file (VFS paths and variables allowed), as in Table Input. ([#8033](https://github.com/apache/hop/issues/8033))
* Fuzzy Match: an explicit Match mode replaces the 'Get closer value' checkbox and returns distance or similarity values along with multiple matches (top-K or separate rows). ([#3643](https://github.com/apache/hop/issues/3643))
* Group By: new option to exclude rows from aggregation based on a boolean field while still using them for group detection. ([#8308](https://github.com/apache/hop/issues/8308))
* JavaScript transform and action: scripts are edited in the shared content editor with syntax highlighting, bracket matching and find/replace, in Hop GUI and Hop Web. ([#8488](https://github.com/apache/hop/issues/8488), [#8515](https://github.com/apache/hop/issues/8515))
* Kafka Consumer: a new 'Max consume duration (ms)' option on the Batch tab stops polling after a fixed time window (0 = no limit). ([#8508](https://github.com/apache/hop/issues/8508), [#8518](https://github.com/apache/hop/issues/8518))
* Language Model Chat: upgraded to langchain4j 1.20.0. ([#8336](https://github.com/apache/hop/issues/8336))
* Parquet Output: the dialog is rebuilt with four tabs and a scrolled, resizable layout, so all options fit on a 1080p screen and OK/Cancel stay visible. ([#8298](https://github.com/apache/hop/issues/8298), [#8300](https://github.com/apache/hop/issues/8300))
* Performance: faster processing in several transforms, including Add sequence, Concat fields, Value mapper, String operations, Sequence flattener and Fuzzy match. ([#8965](https://github.com/apache/hop/issues/8965))
* Pipeline unit tests and Execute unit tests: you can now use custom test types in addition to Development and Unit test. ([#2420](https://github.com/apache/hop/issues/2420))
* SQL File Output: new options to generate only CREATE TABLE statements without INSERTs, and to select and rename the fields to write. ([#8782](https://github.com/apache/hop/issues/8782))
* Serialize To File and De-Serialize From File: several copies can write or read their own files in parallel, with an 'Include transform nr in filename' option. ([#8592](https://github.com/apache/hop/issues/8592))
* Split field to rows: new Enclosure option so delimiters inside quoted values are not split on; enclosure characters are removed from the output. ([#8266](https://github.com/apache/hop/issues/8266), [#8275](https://github.com/apache/hop/issues/8275))
* Split field to rows: new option to exclude the field being split from the output (off by default). ([#3123](https://github.com/apache/hop/issues/3123))
* Table Input / Table Output: fields can be defined by hand for environments where the developer cannot reach the database. ([#2722](https://github.com/apache/hop/issues/2722))
* Text File Output: a new 'Do not right-pad fields' option on the Content tab stops string values being padded with spaces to their field length (for example lengths taken from a database or set through metadata injection). ([#4303](https://github.com/apache/hop/issues/4303))
* Text File Output: output is flushed to the file every few seconds by default, so slowly arriving rows show up without waiting for the buffer to fill. A configured HOP_FILE_OUTPUT_MAX_STREAM_LIFE interval now actually takes effect. ([#2406](https://github.com/apache/hop/issues/2406))
* Add a checksum: new Hash code type reproducing the hash Combination lookup/update uses, and Combination lookup/update can read a pre-calculated hash field. ([#3460](https://github.com/apache/hop/issues/3460), [#8681](https://github.com/apache/hop/issues/8681))
* Avro Decode: a new 'Get fields from JSON' button builds the field list from a pasted Avro value, schema or sample record. The existing button is renamed 'Get fields from file'. ([#8539](https://github.com/apache/hop/issues/8539))
* Combination Lookup/Update: dialog split into General, Key fields and Technical key tabs. ([#8472](https://github.com/apache/hop/issues/8472))
* Credit Card Validator: custom BIN ranges and rules can be supplied from a CSV file. ([#8767](https://github.com/apache/hop/issues/8767))
* File Metadata: clearer errors for archive URIs (for example a zip path missing the file name after '!/'), and the resolved file name is logged when a file is not found instead of silently emitting an empty row. ([#2059](https://github.com/apache/hop/issues/2059))
* Get table names, SQL file output, PostgreSQL/MySQL/Vertica bulk loaders and the Wait for SQL action: new Browse button to pick a schema name. ([#5438](https://github.com/apache/hop/issues/5438), [#8179](https://github.com/apache/hop/issues/8179))
* Git Input: new per-type output layout and additional fields such as labels, merged/closed dates, author login, committer details and merge flag. ([#8347](https://github.com/apache/hop/issues/8347))
* JSON Input: an option to turn off variable resolution in JsonPath expressions, so paths such as $[0].similarity are not changed by variable substitution. ([#8444](https://github.com/apache/hop/issues/8444))
* Java Filter: new options, a better expression editor and more documentation, so a filter can be defined without depending on fixed field names. ([#8243](https://github.com/apache/hop/issues/8243))
* PgVector search: each filter gets a 'Skip if empty' option to leave it out of the query when the row value is empty; AI Provider precedence in Language Model Chat is documented. ([#8629](https://github.com/apache/hop/issues/8629), [#8630](https://github.com/apache/hop/issues/8630))
* Split Fields: a new 'Keep the field to split' option keeps the original field and adds the new fields at the end of the row. ([#3820](https://github.com/apache/hop/issues/3820))
* Table Input: handling of bind parameters made more consistent with Execute SQL script. ([#2604](https://github.com/apache/hop/issues/2604))
* Text File Input: 'Field in the input to use as filename' offers a drop-down of incoming fields (issue closed in this milestone). ([#8315](https://github.com/apache/hop/issues/8315))
* ETL Metadata Injection: a new option runs the template pipeline even when every input stream is empty, for templates that only use constant values. ([#9077](https://github.com/apache/hop/issues/9077), [#9078](https://github.com/apache/hop/issues/9078))
* Dimension Lookup/Update: each dialog tab now scrolls on its own, like Database Lookup. ([#8470](https://github.com/apache/hop/issues/8470))
:::

:::details[Fixed (72)]
* Add Sequence: no longer warns about a missing database connection when using a counter. ([#8561](https://github.com/apache/hop/issues/8561))
* Add XML: namespace declarations are kept in the generated XML. ([#3320](https://github.com/apache/hop/issues/3320))
* Avro File Output: schema file paths containing variables (for example in the project folder) are now resolved correctly. ([#3901](https://github.com/apache/hop/issues/3901))
* CSV Input: Verify no longer reports an error when the filename comes from a previous transform, and checks the filename field or static filename instead. ([#8500](https://github.com/apache/hop/issues/8500))
* Calculator: legacy pipelines without a value length/precision load with -1 (unspecified) again instead of 0. ([#9037](https://github.com/apache/hop/issues/9037), [#9038](https://github.com/apache/hop/issues/9038))
* Change file encoding: Create parent folder now creates the target file's folder, and source and target files can be on VFS locations. ([#8779](https://github.com/apache/hop/issues/8779))
* Closure Generator and Evaluate table content: Verify pipeline/workflow now reports missing fields correctly. ([#8726](https://github.com/apache/hop/issues/8726))
* Combination Lookup/Update: the SQL button no longer throws a NullPointerException. ([#8283](https://github.com/apache/hop/issues/8283))
* Combination lookup/update: fixed a performance regression caused by looking up the database connection on every row; Dimension lookup/update is also faster. ([#8922](https://github.com/apache/hop/issues/8922), [#8925](https://github.com/apache/hop/issues/8925))
* Cube output: no longer fails when the pipeline produces no rows. ([#8380](https://github.com/apache/hop/issues/8380), [#8381](https://github.com/apache/hop/issues/8381))
* Database Join: the dialog opens again when its configured connection no longer exists. ([#8095](https://github.com/apache/hop/issues/8095))
* Database Lookup: return values with a Type set keep the table column's length and precision, so downstream Table Output and bulk loaders generate correct DDL. ([#8260](https://github.com/apache/hop/issues/8260))
* Dimension Lookup/Update: works with PostgreSQL numeric(38,0) technical keys generated by a sequence. ([#8130](https://github.com/apache/hop/issues/8130))
* Dynamic SQL row: Show output fields and verify now return the template SQL fields. ([#4471](https://github.com/apache/hop/issues/4471), [#8584](https://github.com/apache/hop/issues/8584))
* Embed text: whitespace-only text is skipped like empty text instead of failing the batch. ([#8750](https://github.com/apache/hop/issues/8750), [#8831](https://github.com/apache/hop/issues/8831))
* Execute SQL script: the transform metrics now show the rows affected by MERGE statements. ([#8386](https://github.com/apache/hop/issues/8386))
* File Metadata: decimal numbers keep all their decimals in the detected precision and mask, and fields containing quotes inside an enclosure are handled. ([#5609](https://github.com/apache/hop/issues/5609), [#8555](https://github.com/apache/hop/issues/8555))
* Filter Rows: date constants saved in Hop's internal format are now evaluated and editable when the condition uses a different date mask. ([#3051](https://github.com/apache/hop/issues/3051))
* Formula: dates before 1900-01-01 are now handled correctly instead of producing wrong years or null values. ([#3572](https://github.com/apache/hop/issues/3572), [#7916](https://github.com/apache/hop/issues/7916))
* Formula: the formula editor no longer shrinks or collapses each time it is reopened, and remembers its size. ([#8139](https://github.com/apache/hop/issues/8139))
* Get Data From XML: a file that cannot be opened is sent to the error handling hop instead of aborting the pipeline. ([#8000](https://github.com/apache/hop/issues/8000))
* HTTP Client, HTTP Post and REST Client: Check no longer reports an error when the URL or method field is set correctly, and the HTTP Post dialog opens for transforms saved without lookup fields. ([#8545](https://github.com/apache/hop/issues/8545))
* HTTP/REST: host names containing underscores are now accepted when building the request. ([#8046](https://github.com/apache/hop/issues/8046))
* Insert/Update: changing the fields now marks the pipeline as changed so the edits can be saved. ([#8917](https://github.com/apache/hop/issues/8917))
* JSON Input, JSON Normalize Input and Get XML Data: the optional 'Is hidden?' additional field now reports whether the file is actually hidden. ([#8289](https://github.com/apache/hop/issues/8289))
* JSON Input: JsonPath functions such as length(), sum() and keys() return their value (for example an array's element count) instead of null. ([#2362](https://github.com/apache/hop/issues/2362))
* JSON Input: a JSON null or missing path stays null and is no longer turned into an empty string when HOP_EMPTY_STRING_DIFFERS_FROM_NULL is Y. ([#4373](https://github.com/apache/hop/issues/4373))
* JSON Input: a JSON null read into a String field now becomes a Hop null instead of the text "null". ([#7990](https://github.com/apache/hop/issues/7990))
* JSON Input: the 'Do not raise an error if no files' option is now honoured for missing or invalid paths, and existing listed files no longer log 'No file(s) specified'. ([#2723](https://github.com/apache/hop/issues/2723), [#8186](https://github.com/apache/hop/issues/8186))
* JSON Input: with ignore empty files enabled, an empty file no longer produces a row of null values. ([#8071](https://github.com/apache/hop/issues/8071))
* JSON Output: input fields are no longer returned as NULL for the last partial block of rows. ([#2958](https://github.com/apache/hop/issues/2958))
* JavaScript: LoadScriptFromTab now fails immediately with a clear error for a missing tab or invalid script instead of failing later with misleading errors. ([#8322](https://github.com/apache/hop/issues/8322))
* JavaScript: a replaced field that the script never assigns now keeps its input value, and adding a comment that mentions the field no longer changes the output. ([#8724](https://github.com/apache/hop/issues/8724))
* JavaScript: pressing Cancel on an unchanged dialog no longer warns about unsaved changes. ([#8564](https://github.com/apache/hop/issues/8564), [#8633](https://github.com/apache/hop/issues/8633))
* JavaScript: the 'Get variables' button no longer raises errors on valid scripts. ([#3403](https://github.com/apache/hop/issues/3403))
* Join Rows (cartesian product): hardened, and blocked from running on Beam and Spark engines, where it used to loop forever. ([#2353](https://github.com/apache/hop/issues/2353))
* LDAP Input: dialog layout issues fixed. ([#8474](https://github.com/apache/hop/issues/8474), [#8475](https://github.com/apache/hop/issues/8475))
* OData Input: 'Get Fields', 'Get Entity Sets' or running the transform no longer shuts down the shared HTTP connection pool, which made later requests fail with 'Connection pool shut down' until Hop was restarted. ([#8160](https://github.com/apache/hop/issues/8160))
* Parquet Input: fixed a 'Relative path in absolute URI' error when reading files given by a filename field. ([#3598](https://github.com/apache/hop/issues/3598))
* Parquet Output: code hardening and cleanup of the transform, following a report about footer sizes on files read by systems such as Dremio. ([#2338](https://github.com/apache/hop/issues/2338), [#8537](https://github.com/apache/hop/issues/8537))
* Pipeline executor and other child-pipeline transforms: the load error now names the pipeline file instead of showing "[{0}]". ([#9019](https://github.com/apache/hop/issues/9019))
* REST Client: a disabled incoming hop no longer causes a validation error when Accept URL from field is enabled. ([#8660](https://github.com/apache/hop/issues/8660))
* REST Client: an encrypted trust store password is now decrypted, like every other password field. ([#8054](https://github.com/apache/hop/issues/8054))
* REST Client: no charset is added to the Content-Type header unless the row sets the header itself (application/json instead of application/json; charset=UTF-8), which fixes APIs that rejected the request with HTTP 500. ([#8507](https://github.com/apache/hop/issues/8507))
* Row Normaliser: handles fields of mixed, non-String types correctly so previews and downstream sorting no longer fail. ([#3636](https://github.com/apache/hop/issues/3636), [#8549](https://github.com/apache/hop/issues/8549))
* Salesforce Insert, Update, Upsert and Delete: pipeline verification no longer reports an error when the transform has input. ([#8024](https://github.com/apache/hop/issues/8024))
* Select Values: addressed a freeze when converting dates whose format differs from the computer's regional settings (issue closed in this milestone). ([#4227](https://github.com/apache/hop/issues/4227))
* Select Values: fixed a crash when converting a date with a locale and time zone specified. ([#4228](https://github.com/apache/hop/issues/4228))
* Select Values: pipeline verification (and the linter) no longer reports false errors for valid pipelines. ([#8294](https://github.com/apache/hop/issues/8294))
* Several transforms and actions (including Add Constants, bulk loaders, Insert/Update, Update, Delete, Set Variables and file actions) handle empty and null values correctly again. ([#8960](https://github.com/apache/hop/issues/8960), [#8962](https://github.com/apache/hop/issues/8962))
* Simple Mapping: Metadata Injection keys for input and output mappings are now unique, so injecting one no longer overwrites the other. ([#3025](https://github.com/apache/hop/issues/3025), [#7956](https://github.com/apache/hop/issues/7956))
* Sorted Merge: a failing key comparison now fails the transform instead of being treated as equal (which could emit rows out of order), and output field metadata reports the descending sort order correctly. ([#8354](https://github.com/apache/hop/issues/8354))
* Spark File Output: writing with file_format=jdbc no longer sends a path connection property, which drivers such as Teradata rejected. ([#8138](https://github.com/apache/hop/issues/8138))
* Spark lake table output: Iceberg PATH tables on the native Spark engine are written at their table path instead of under java.io.tmpdir. ([#8794](https://github.com/apache/hop/issues/8794), [#8795](https://github.com/apache/hop/issues/8795))
* Standardize Phone Number: the country field is optional when a default country is set, unparseable numbers keep the original value and are flagged as invalid, and country codes are normalized. ([#8238](https://github.com/apache/hop/issues/8238))
* Stream Lookup: a default value for a Timestamp return field no longer throws a conversion error. ([#8219](https://github.com/apache/hop/issues/8219))
* Stream Lookup: addressed pipeline deadlocks with split and rejoined streams when the lookup input is blocked. ([#7752](https://github.com/apache/hop/issues/7752))
* Synchronize after merge: stopping a pipeline now commits correctly and no longer leaves an Oracle table lock behind. ([#8288](https://github.com/apache/hop/issues/8288))
* Table Input / Database Join: stopping a pipeline now cancels the running SQL statement on the database. ([#8667](https://github.com/apache/hop/issues/8667))
* Table Input: incoming rows are no longer bound to the statement when the SQL has no placeholders, so hops used only for sequencing work again (e.g. on Oracle). ([#8787](https://github.com/apache/hop/issues/8787))
* Text File Input and CSV File Input: Get Fields again returns the sampled types, lengths and masks, without a blank first row, and is much faster on remote files. ([#8404](https://github.com/apache/hop/issues/8404), [#8524](https://github.com/apache/hop/issues/8524))
* Text File Output: again inherits the date format mask and other value type settings of incoming fields. ([#8956](https://github.com/apache/hop/issues/8956), [#8959](https://github.com/apache/hop/issues/8959))
* Text File Output: writes a byte order mark only once at the start of the file with UTF-16/UTF-32 BOM encodings, not before every value and separator. ([#9032](https://github.com/apache/hop/issues/9032), [#9054](https://github.com/apache/hop/issues/9054))
* Text chunker: the STRUCTURE strategy no longer emits whitespace-only chunks, and the chunk index and total count match the chunks actually emitted. ([#8751](https://github.com/apache/hop/issues/8751))
* Transform dialogs: several dialogs (such as Add constants and Insert/Update) now detect changes correctly, so edits are recognised and saved. ([#8022](https://github.com/apache/hop/issues/8022))
* User Defined Java Class: 'Test class' now works when info transforms and target transforms are configured. ([#4584](https://github.com/apache/hop/issues/4584))
* Web services lookup: a WSDL file referenced with a variable such as '${PROJECT_HOME}' now loads. ([#4813](https://github.com/apache/hop/issues/4813), [#8552](https://github.com/apache/hop/issues/8552))
* Write To Log: the 'Row level (very detailed)' log level is now stored instead of reverting to Basic. ([#8603](https://github.com/apache/hop/issues/8603))
* XML plugins: Get data from XML reads attribute fields saved with a translated element type, and DOCTYPE handling, XSLT includes and XML Output (Advanced) edge cases are fixed. ([#8936](https://github.com/apache/hop/issues/8936))
* Pipeline Executor: with retries enabled, each retry uses the current parameter and inherited variable values instead of values left over from the previous attempt. ([#9059](https://github.com/apache/hop/issues/9059))
* SSH Commands: a new Command timeout option (0 means no limit), separate from the connection timeout, so long-running commands no longer fail after 120 seconds. ([#9072](https://github.com/apache/hop/issues/9072), [#9073](https://github.com/apache/hop/issues/9073))
* YAML Input: a document that is a list of maps is read to the end instead of only its first element, a path that matches nothing gives a null field, and 'Ignore empty file' no longer fails when every file is empty. ([#9041](https://github.com/apache/hop/issues/9041), [#9082](https://github.com/apache/hop/issues/9082))
:::

### Actions

:::details[New and improved (10)]
* New dbt action: orchestrates dbt Core operations (run, build, test, seed, snapshot, compile) from a workflow. ([#8019](https://github.com/apache/hop/issues/8019), [#8020](https://github.com/apache/hop/issues/8020))
* Pipeline and Workflow actions, Pipeline Executor and Workflow Executor: new optional 'Stop after (milliseconds)' wait timeout that stops a nested pipeline or workflow running too long; empty or 0 waits indefinitely as before. ([#2383](https://github.com/apache/hop/issues/2383))
* HTTP action: a new Result variable option on the Reply tab stores the response body in a variable for later actions in the workflow. ([#2666](https://github.com/apache/hop/issues/2666), [#7969](https://github.com/apache/hop/issues/7969))
* Run Linter: a new workflow action lints a project or folder and fails on a severity threshold, giving the same results as hop lint. ([#8826](https://github.com/apache/hop/issues/8826))
* Shell action: arguments can be marked as hidden so that credentials and tokens are not written to the execution log. ([#4935](https://github.com/apache/hop/issues/4935))
* Workflows: a new way to evaluate the results of previous work in an action (log text, number of result files, variables, error state) and fail the workflow with a custom message when expectations are not met. ([#2382](https://github.com/apache/hop/issues/2382))
* Graph index and Graph constraint actions: variables now resolve in index names, labels, relationship types and properties, and Apache AGE indexes are supported. ([#8836](https://github.com/apache/hop/issues/8836))
* PGP encrypt files: new Signing key column chooses the key used to sign for Sign and Sign and Encrypt rows. ([#8659](https://github.com/apache/hop/issues/8659))
* PGP encrypt/decrypt actions: support for signing with an alternate signing ID, as in Pentaho. ([#8206](https://github.com/apache/hop/issues/8206))
* dbt action: the dialog is now organised into tabs (dbt project, Selection, Execution, Variables). ([#8589](https://github.com/apache/hop/issues/8589))
:::

:::details[Fixed (20)]
* Columns exist in a table: the action now fails when no database connection is set or the column list is empty. ([#8904](https://github.com/apache/hop/issues/8904), [#8911](https://github.com/apache/hop/issues/8911))
* Copy files: Copy files no longer starts copying while it is still reading the source folder, so it behaves as in 2.16 again. ([#8800](https://github.com/apache/hop/issues/8800))
* Delete Folders: workflow verification shows a correct warning for an empty list and validates the configured folders. ([#8985](https://github.com/apache/hop/issues/8985))
* Delete files: with Include subfolders unchecked, files in subfolders are no longer deleted. ([#7952](https://github.com/apache/hop/issues/7952), [#7957](https://github.com/apache/hop/issues/7957))
* Evaluate files metrics: Verify workflow now checks every configured file or folder row. ([#8866](https://github.com/apache/hop/issues/8866))
* Get a file with FTP: the remote directory check button works again. ([#8252](https://github.com/apache/hop/issues/8252))
* Get mails (POP3/IMAP): the IMAP Retrieve setting (for example 'Get unread messages') and related options are kept after saving and reopening, and workflows saved by older versions load correctly. ([#8328](https://github.com/apache/hop/issues/8328))
* HTTP, HTTP Post and HTTP client: proxy settings are honoured again and the transforms/action were hardened, fixing time-outs when going through a proxy. ([#2962](https://github.com/apache/hop/issues/2962), [#3440](https://github.com/apache/hop/issues/3440), [#8540](https://github.com/apache/hop/issues/8540))
* Join (workflow): no longer waits forever when a parallel branch fails before it reaches the Join. ([#8063](https://github.com/apache/hop/issues/8063))
* Mail action: a missing Mail server connection now fails the action instead of stopping the workflow with a NullPointerException. ([#9001](https://github.com/apache/hop/issues/9001))
* Move files: logging fix when the action processes files using rows from a previous result as arguments. ([#4045](https://github.com/apache/hop/issues/4045), [#8581](https://github.com/apache/hop/issues/8581))
* Pipeline action: result rows are cleared when a pipeline with Copy rows to result produces no rows, so stale rows from an earlier pipeline are no longer forwarded. ([#4581](https://github.com/apache/hop/issues/4581))
* SFTP put: moving a file after upload works when the target folder is on a different file system. ([#5936](https://github.com/apache/hop/issues/5936), [#7918](https://github.com/apache/hop/issues/7918))
* Truncate tables: the action now fails when the connection is missing or the truncate fails, and the dialog fills in schema names with table names. ([#8777](https://github.com/apache/hop/issues/8777), [#8778](https://github.com/apache/hop/issues/8778))
* Unzip file: no longer changes the modification date of existing files it skipped. ([#4143](https://github.com/apache/hop/issues/4143), [#7919](https://github.com/apache/hop/issues/7919))
* Wait for SQL: date columns added to the result set now reach Get rows from result with the right type, instead of 'Unknown type 0' errors or wrong values. ([#2483](https://github.com/apache/hop/issues/2483), [#8086](https://github.com/apache/hop/issues/8086))
* Wait for SQL: workflow verification (F7) no longer always reports an error and now checks the connection, table name or custom SQL as the dialog does. ([#9012](https://github.com/apache/hop/issues/9012), [#9013](https://github.com/apache/hop/issues/9013))
* Workflow Check (F7): Create folder, Delete files, Delete result filenames, Copy/Move result filenames and DTD validator no longer report bogus validation errors and now check the right fields. ([#8908](https://github.com/apache/hop/issues/8908), [#8933](https://github.com/apache/hop/issues/8933), [#8939](https://github.com/apache/hop/issues/8939), [#8954](https://github.com/apache/hop/issues/8954))
* Workflow Check (F7): MySQL Bulk Load, MySQL Bulk File, MSSQL Bulk Load and other actions check the fields they really use, instead of reporting a filled field as empty or skipping the check. ([#9083](https://github.com/apache/hop/issues/9083), [#9085](https://github.com/apache/hop/issues/9085))
* Add filenames to result, Unzip, Delete file, Create folder and Delete filenames from result: a one-field result row no longer stops the workflow, Unzip counts errors once and honours its wildcards in Fail mode, a failed delete is reported as an error, and result files deleted from disk can still be removed from the result. ([#9049](https://github.com/apache/hop/issues/9049), [#9101](https://github.com/apache/hop/issues/9101))
:::

### Pipelines & workflows engine

:::details[New and improved (7)]
* Value types: a new Vector value type carries embeddings through pipelines as a typed value instead of a String or Binary. ([#8409](https://github.com/apache/hop/issues/8409))
* Apache Beam: pipelines run on Beam engines now support transform partitioning, as the local engine already did. ([#2040](https://github.com/apache/hop/issues/2040))
* Boolean fields: a format mask can now be set to control how booleans are converted to and from strings. ([#8557](https://github.com/apache/hop/issues/8557))
* Data profiles: a new Large values group sets separate size limits for String, JSON, Binary and Avro values, so oversized values are left out of the sample rows stored in an execution information location. ([#8617](https://github.com/apache/hop/issues/8617))
* Pipelines and workflows: the Hop version used to create and last modify a file is now recorded and shown in the properties dialog, whose info tab is now scrollable. ([#8039](https://github.com/apache/hop/issues/8039))
* Pipelines: sending rows into a transform that does not read input (for example one not set to read from a field) now raises an error instead of letting the pipeline block forever. ([#2641](https://github.com/apache/hop/issues/2641))
* Execution information: a child pipeline or workflow stores a direct link to its parent execution when it starts, so the Execution perspective no longer scans and loads other executions to find it. ([#8863](https://github.com/apache/hop/issues/8863), [#8865](https://github.com/apache/hop/issues/8865))
:::

:::details[Fixed (19)]
* Caching Database execution information location: stopping a workflow no longer leaves Hop logging errors from writes through a closed connection. ([#8568](https://github.com/apache/hop/issues/8568), [#8570](https://github.com/apache/hop/issues/8570))
* Caching execution information locations (database and file): fixed a memory leak that caused out-of-memory errors on long-running pipelines; a new maximum cache size setting (default 50) bounds the cache. ([#8623](https://github.com/apache/hop/issues/8623), [#8625](https://github.com/apache/hop/issues/8625))
* Error handling: rows sent to an error handling hop are no longer logged as an ERROR line per row. ([#8125](https://github.com/apache/hop/issues/8125))
* Execution information: sampled rows containing Avro Record fields (from Avro File Input or Kafka Consumer) are now saved to and read back from an execution information location. ([#8600](https://github.com/apache/hop/issues/8600))
* Join action: runs once when parallel branches finish at the same moment, instead of occasionally running everything downstream twice. ([#8701](https://github.com/apache/hop/issues/8701), [#8797](https://github.com/apache/hop/issues/8797))
* Native Spark engine: all output branches now run instead of one; native Spark pipelines can also run on YARN from Hop GUI, hop-run and Hop Server. ([#9020](https://github.com/apache/hop/issues/9020))
* Pipeline action: with 'Pass parameter values to sub pipeline' unchecked, a sub-pipeline's own named parameters are no longer silently overridden by same-named variables from the calling workflow. ([#8084](https://github.com/apache/hop/issues/8084), [#8101](https://github.com/apache/hop/issues/8101))
* Pipeline engine: restores pipeline throughput on Java 21, where rowset back-off between transforms had become a busy wait. ([#8882](https://github.com/apache/hop/issues/8882))
* Pipeline properties: info fields such as modified date and created/modified user are now populated. ([#8124](https://github.com/apache/hop/issues/8124), [#8631](https://github.com/apache/hop/issues/8631))
* Pipelines and workflows: incorrect or dangling hops are handled more robustly and pipelines/workflows are cleaned up correctly when they occur. ([#8129](https://github.com/apache/hop/issues/8129), [#7989](https://github.com/apache/hop/issues/7989))
* Pipelines and workflows: with Synchronize name with filename enabled, the saved file now contains the filename-derived name instead of New pipeline / New workflow. ([#8620](https://github.com/apache/hop/issues/8620))
* Pipelines: a slow save to the execution information location no longer stops a pipeline from finishing or freezes Hop GUI when you stop it. ([#8808](https://github.com/apache/hop/issues/8808))
* Pipelines: fixed an "Error reading object from XML file" when loading a pipeline whose error-handling target transform was deleted. ([#8128](https://github.com/apache/hop/issues/8128))
* Pipelines: rows sent over an error hop are no longer logged at ERROR level; validator-only workarounds were removed. ([#8126](https://github.com/apache/hop/issues/8126))
* Run configurations: switching from a single-threaded run configuration back to the local engine no longer rewrites the pipeline type in the file and hangs the pipeline. ([#8262](https://github.com/apache/hop/issues/8262))
* String to number conversion: an ASCII minus sign is accepted in locales whose negative sign differs (e.g. JSON input, Data Grid, Calculator constants). ([#8639](https://github.com/apache/hop/issues/8639))
* Timestamps: the default timestamp parse mask is now taken from HOP_DEFAULT_TIMESTAMP_FORMAT instead of HOP_DEFAULT_DATE_FORMAT. ([#8218](https://github.com/apache/hop/issues/8218))
* Value conversion: converting a Timestamp field to Date (for example in Select Values) now gives a real Date value instead of keeping the timestamp. ([#5651](https://github.com/apache/hop/issues/5651))
* Extension points: PipelineCompleted now runs before waitUntilFinished() returns, so plugins such as OpenLineage no longer lose their work at the end of a short hop-run. ([#9005](https://github.com/apache/hop/issues/9005), [#9035](https://github.com/apache/hop/issues/9035))
:::

### Databases

:::details[New and improved (8)]
* Graph database connections: Neo4j connections are replaced by pluggable graph database connections (Bolt-based Neo4j, Memgraph and Amazon Neptune, plus FalkorDB, Apache AGE and Gremlin), and the graph transforms and actions now work with any of them. ([#3032](https://github.com/apache/hop/issues/3032))
* Databases: generated DDL (for example the SQL button in Table Output) now creates native vector columns for Vector fields on dialects that support them. ([#8411](https://github.com/apache/hop/issues/8411))
* Databases: each database type now describes its own column type mapping, and plugins can add mappings for specific database types. ([#7997](https://github.com/apache/hop/issues/7997))
* Hop GUI: when Validate database connections when saving is on, you are warned on save if a transform or action references a database connection that does not exist; you can still save. ([#2955](https://github.com/apache/hop/issues/2955))
* Databases: a database type can now limit rows before the query (e.g. TOP/FIRST) as well as after it, so row limits work correctly on more databases. ([#8032](https://github.com/apache/hop/issues/8032))
* Databases: fetching the first rows of a query (for example in previews) works for database types that need the limit clause before the query. ([#8013](https://github.com/apache/hop/issues/8013))
* DuckDB: database sequences are supported, so Add Sequence and the dimension lookups can take keys from a DuckDB sequence. ([#8522](https://github.com/apache/hop/issues/8522), [#8523](https://github.com/apache/hop/issues/8523))
* H2: sequences are now supported. ([#8526](https://github.com/apache/hop/issues/8526))
:::

:::details[Fixed (21)]
* Binary columns: VARBINARY columns (for example SAP HANA through a Generic Database connection) are read as bytes instead of failing on a Blob conversion. ([#8207](https://github.com/apache/hop/issues/8207), [#8209](https://github.com/apache/hop/issues/8209))
* Database lookups: conditions using IS NOT NULL now produce valid SQL instead of IS NULL. ([#8897](https://github.com/apache/hop/issues/8897))
* Database parameter metadata: NUMERIC and character types such as LONGVARCHAR, NCHAR and NVARCHAR are no longer misclassified (issue closed in this milestone). ([#8222](https://github.com/apache/hop/issues/8222))
* Databases: DECIMAL/NUMERIC columns are read with length and precision that DDL generation understands again, so generated table definitions are correct. ([#8216](https://github.com/apache/hop/issues/8216))
* Databases: a schema given as catalog.schema is now split correctly for databases that do not report catalog support. ([#8226](https://github.com/apache/hop/issues/8226))
* Databases: getting query fields on databases that do not support prepared statement metadata (such as Oracle, H2, Exasol 4, Gupta and Sybase IQ) now works from the JDBC column metadata. ([#8223](https://github.com/apache/hop/issues/8223))
* Databases: the configured query timeout now also applies to DDL and DML statements, not only to queries. ([#8224](https://github.com/apache/hop/issues/8224))
* DuckDB: TIME columns can now be read, and browsing the DuckDB catalog works again. ([#3744](https://github.com/apache/hop/issues/3744), [#3743](https://github.com/apache/hop/issues/3743))
* DuckDB: in-memory databases (jdbc:duckdb:) show their tables and schemas, the catalog can be browsed, and TIME columns can be read. ([#3743](https://github.com/apache/hop/issues/3743), [#3744](https://github.com/apache/hop/issues/3744))
* Informix: the Informix Servername field is saved and used in the connection URL again, so Informix connections work. ([#8085](https://github.com/apache/hop/issues/8085))
* Oracle: NVARCHAR2, NCHAR, NCLOB and CLOB columns are written with the JDBC calls the driver expects, so characters outside the database character set are no longer lost and mixed-length batches no longer fail with ORA-01461. ([#7057](https://github.com/apache/hop/issues/7057))
* Redshift Bulk Loader and CrateDB Bulk Loader: fixed NullPointerExceptions, variables in AWS credentials not being resolved, and credentials being overwritten when reopening the dialog. ([#3621](https://github.com/apache/hop/issues/3621))
* SQL Server: generated DDL for String fields keeps Unicode and no longer uses the legacy TEXT type. ([#8221](https://github.com/apache/hop/issues/8221))
* SQL Server: generated DDL preserves the date/time types of source columns more faithfully instead of mapping Date and Timestamp both to DATETIME. ([#8220](https://github.com/apache/hop/issues/8220))
* SQL editor: its 1000-row limit no longer applies only on the client side, so a large SELECT does not fetch the whole result set. ([#8229](https://github.com/apache/hop/issues/8229))
* SQL generation: integer fields map to integer column types instead of DOUBLE PRECISION (for example in SQL File Output for PostgreSQL). ([#4174](https://github.com/apache/hop/issues/4174))
* SQLite: dates are read and written consistently, and type handling is hardened so Database Join and similar transforms no longer fail with inconsistent meta type errors. ([#3633](https://github.com/apache/hop/issues/3633), [#3910](https://github.com/apache/hop/issues/3910))
* Snowflake Bulk Loader: dates and timestamps are now written in a format that Snowflake COPY INTO accepts. ([#2298](https://github.com/apache/hop/issues/2298))
* Table Output and other database writes: inserting a null UUID into Oracle and other databases without Types.OTHER no longer fails; type casting and fallbacks for special value types were hardened. ([#8015](https://github.com/apache/hop/issues/8015), [#8048](https://github.com/apache/hop/issues/8048))
* Table Output and related transforms on Oracle: error handling now sends failing rows to the error hop instead of swallowing them. ([#5758](https://github.com/apache/hop/issues/5758))
* Vertica Bulk Loader: without 'Specify database fields', stream fields are now matched to table columns by name instead of by position. ([#4394](https://github.com/apache/hop/issues/4394))
:::

### File systems (VFS) & cloud

:::details[New and improved (6)]
* FTP(S): new named FTP(S) connection metadata usable as a VFS file system across transforms and actions. ([#7777](https://github.com/apache/hop/issues/7777))
* Git VFS connection: a named Git repository connection checks out a branch, tag or commit and serves it as a read-only VFS location, so hop-run can execute e.g. ops:///workflows/daily.hwf straight from a repository. ([#8663](https://github.com/apache/hop/issues/8663), [#8680](https://github.com/apache/hop/issues/8680))
* HDFS: a new marketplace VFS plugin that reads and writes HDFS over WebHDFS, HttpFS or Knox without Hadoop client JARs, so transforms such as Parquet File Output can write to HDFS. ([#8285](https://github.com/apache/hop/issues/8285))
* SMB: a new named SMB VFS connection reads and writes Windows or Samba shares (SMB 2 and 3) without mounting them. ([#8671](https://github.com/apache/hop/issues/8671))
* Azure Blob Storage VFS: connections can authenticate with a SAS token, in addition to an account key or managed identity. ([#6982](https://github.com/apache/hop/issues/6982), [#7936](https://github.com/apache/hop/issues/7936))
* Paths: a path starting with ~ (for example an environment home) now resolves to the user's home directory instead of creating a folder named ~ in the Hop installation directory. ([#2402](https://github.com/apache/hop/issues/2402), [#8256](https://github.com/apache/hop/issues/8256))
:::

:::details[Fixed (14)]
* Azure Blob Storage: reading after a skip no longer returns wrong or missing data. ([#8838](https://github.com/apache/hop/issues/8838), [#8839](https://github.com/apache/hop/issues/8839))
* File Explorer: VFS driver failures (such as missing libraries) are reported and the status line stops, instead of appearing to refresh forever. ([#8728](https://github.com/apache/hop/issues/8728))
* Google Cloud Storage: a watchdog and more logging catch downloads that would otherwise hang forever (for example in Text File Input). ([#8821](https://github.com/apache/hop/issues/8821))
* Google Cloud Storage: files with % in their name can be read and listed, with clearer error messages for file/folder mismatches. ([#8844](https://github.com/apache/hop/issues/8844))
* Google Cloud Storage: retry options are now applied to write operations. ([#8038](https://github.com/apache/hop/issues/8038))
* Google Cloud Storage: the retry settings in the Google Cloud configuration now also apply to writes. ([#8028](https://github.com/apache/hop/issues/8028))
* HDFS VFS (WebHDFS, Kerberos): parallel writes, for example several Parquet File Output copies, no longer stall or hang in Halting. ([#8440](https://github.com/apache/hop/issues/8440))
* Hop GUI: switching projects correctly releases the VFS namespace, so the log is no longer flooded with 'VFS namespace ... is closed' and the GUI stays responsive. ([#8972](https://github.com/apache/hop/issues/8972), [#8973](https://github.com/apache/hop/issues/8973))
* Hop Server and Hop Web: each execution and each Hop Web session gets its own VFS namespace, so named VFS connections work on Hop Server and users in different projects no longer reset each other's connections. ([#8106](https://github.com/apache/hop/issues/8106), [#8119](https://github.com/apache/hop/issues/8119), [#8215](https://github.com/apache/hop/issues/8215), [#8231](https://github.com/apache/hop/issues/8231))
* Process files and other move operations: moving files between different mounted volumes (for example separate Docker volumes) no longer fails. ([#4380](https://github.com/apache/hop/issues/4380))
* S3: folders that exist only as a key prefix no longer disappear when you browse back to the parent folder, and object names containing % are handled correctly. ([#8841](https://github.com/apache/hop/issues/8841))
* SFTP: a root folder such as //somefolder/ is accepted as a valid path. ([#7930](https://github.com/apache/hop/issues/7930), [#8886](https://github.com/apache/hop/issues/8886))
* SFTP: a z/OS data set path with a single level (//HLQ.NAME) keeps its double slash, and error messages name the remote path. ([#9033](https://github.com/apache/hop/issues/9033), [#9043](https://github.com/apache/hop/issues/9043))
* Zip File transform and Zip file action: updating an existing zip on a VFS file system such as S3 now works. ([#8955](https://github.com/apache/hop/issues/8955))
:::

### Metadata & projects

:::details[New and improved (12)]
* Projects: a new Hop setup gets 'local' pipeline and workflow run configurations in the default project, so new users can run something straight away. ([#9089](https://github.com/apache/hop/issues/9089), [#9090](https://github.com/apache/hop/issues/9090))
* Naming Scheme metadata: reusable rules to normalize names of fields, transforms, actions, pipelines, workflows, variables, database tables/columns, files and folders (for example replacing spaces with underscores), applied from an indicator on name widgets. ([#2683](https://github.com/apache/hop/issues/2683))
* Projects: a child project can copy selected folders from its parent project, so a parent can act as a template; configured on a new Parent project tab in Project Properties. ([#3127](https://github.com/apache/hop/issues/3127))
* Projects: new optional project ID that tags each run, so the Execution Information perspective can show one project's runs when several projects share an execution information database or index. ([#8509](https://github.com/apache/hop/issues/8509))
* Projects: projects can be given a group in Project properties, and the project menu lists recent projects grouped by that topic. ([#2703](https://github.com/apache/hop/issues/2703), [#8677](https://github.com/apache/hop/issues/8677))
* Variables: OS environment variables can optionally be resolved as Hop variables. ([#8495](https://github.com/apache/hop/issues/8495), [#8638](https://github.com/apache/hop/issues/8638))
* Environments: configuration files can be added from a folder with include/exclude regular expressions and optional subfolders, in the environment dialog and hop-conf. ([#8694](https://github.com/apache/hop/issues/8694))
* Environments: configuration files can have a description, and hovering a file lists its variables with passwords hidden. ([#7906](https://github.com/apache/hop/issues/7906))
* Lint: rules can carry tags and a help URI, written to SARIF and JSON output and overridable per project in hop-lint.yml. ([#8814](https://github.com/apache/hop/issues/8814))
* Metadata: metadata types that used PascalCase or run-together keys (for example MailServerConnection, S3ConnectionDefinition, restconnection) now use consistent kebab-case folder names in the project's metadata folder. ([#5597](https://github.com/apache/hop/issues/5597))
* Lint: results are sorted, the Ignore dialog defaults to the reported rules, ignored elements are marked clearly, and result files are no longer written. ([#8735](https://github.com/apache/hop/issues/8735))
* Metadata perspective: duplicating a metadata item inherited from a parent project now asks where to save the copy instead of always writing it into the parent project's folder. ([#4248](https://github.com/apache/hop/issues/4248))
:::

:::details[Fixed (9)]
* Add Project > In Folder: browsing to a folder under the standard projects folder no longer turns it into a self-referencing '${PROJECT_HOME}' path (issue closed in this milestone). ([#8599](https://github.com/apache/hop/issues/8599))
* Data Set: Number fields without a format no longer lose decimal digits when data is saved. ([#3970](https://github.com/apache/hop/issues/3970), [#8580](https://github.com/apache/hop/issues/8580))
* ETL Metadata Injection: values from lazy-conversion sources such as CSV Input are injected as text again instead of "[B@...", fixing errors like "Illegal pattern character 'B'". ([#8812](https://github.com/apache/hop/issues/8812))
* Projects/Marketplace: the env file configured on a lifecycle environment is now resolved relative to the project home, so Open finds the right file. ([#8012](https://github.com/apache/hop/issues/8012))
* Projects: 'Restrict environment list to active project' now also works for the project that is active at Hop GUI startup. ([#5382](https://github.com/apache/hop/issues/5382))
* Projects: a deleted project no longer remains in the project toolbar menu. ([#8700](https://github.com/apache/hop/issues/8700))
* Projects: adding a project with 'default' as its parent no longer fails with a false circular reference error. ([#8650](https://github.com/apache/hop/issues/8650), [#8651](https://github.com/apache/hop/issues/8651))
* Projects: editing project properties no longer fills the parent project with 'default' and fails on save; project delete and rename are hardened. ([#4275](https://github.com/apache/hop/issues/4275))
* Projects: project variables used in environment configuration file paths (such as '${PROJECT_HOME}/config') are now resolved at execution time. ([#8187](https://github.com/apache/hop/issues/8187))
:::

### Hop Server & remote execution

:::details[New and improved (4)]
* Hop Server: the separate hop-rest module and its async API are merged into Hop Server, which now serves the /hop/api/v1 endpoints itself. ([#8145](https://github.com/apache/hop/issues/8145))
* Distributed batch processing using a pool of Hop Servers was addressed in this milestone; details to be confirmed. ([#7992](https://github.com/apache/hop/issues/7992))
* Docker images: 'HOP_DRIVERS_DOWNLOAD' now supports the Databricks JDBC driver. ([#8058](https://github.com/apache/hop/issues/8058))
* Hop Server: the execute-pipeline endpoint now limits where a pipeline can be loaded from, instead of accepting any remote location such as http://. ([#8373](https://github.com/apache/hop/issues/8373))
:::

:::details[Fixed (10)]
* Execution information: parameter values are no longer included in the serialized Execution JSON. ([#8027](https://github.com/apache/hop/issues/8027))
* Hop Server / Hop Web: servlets from plugins can register their endpoint permissions, so authenticated users are no longer refused (403) on plugin endpoints. ([#8334](https://github.com/apache/hop/issues/8334))
* Hop Server: REST connections are found when a pipeline runs on Hop Server. ([#8115](https://github.com/apache/hop/issues/8115), [#8116](https://github.com/apache/hop/issues/8116))
* Hop Server: fixed a deadlock that could hang executions when many exported workflows or pipelines arrive concurrently, for example under load balancing. ([#8455](https://github.com/apache/hop/issues/8455))
* Hop Server: pipelines that hit a critical failure no longer hang in the 'Waiting' state. ([#3861](https://github.com/apache/hop/issues/3861), [#8123](https://github.com/apache/hop/issues/8123))
* Hop Server: the pipeline image page no longer shows an error. ([#8239](https://github.com/apache/hop/issues/8239), [#8241](https://github.com/apache/hop/issues/8241))
* Hop Server: when started with a project or environment, '${PROJECT_HOME}' works in /hop/execPipeline paths. ([#8284](https://github.com/apache/hop/issues/8284), [#8291](https://github.com/apache/hop/issues/8291))
* Remote Hop Server: variables in transform file paths are resolved correctly when 'Export linked resources to server' is enabled on the run configuration. ([#8234](https://github.com/apache/hop/issues/8234))
* Remote execution with Export linked resources: variable resolvers are taken from the exported metadata instead of the server's default metadata. ([#8096](https://github.com/apache/hop/issues/8096), [#8097](https://github.com/apache/hop/issues/8097))
* Remote workflow engine: result files from pipelines (for example Text File Output with 'Add filenames to result') are returned to the workflow again, so a Mail action can attach them. ([#4826](https://github.com/apache/hop/issues/4826))
:::

### Hop Run / CLI & containers

:::details[New and improved (6)]
* Docker image: new environment variables download and install marketplace plugins, including from corporate or community repositories, before Hop starts. ([#8722](https://github.com/apache/hop/issues/8722), [#8723](https://github.com/apache/hop/issues/8723))
* Hop Run / Hop GUI: the new --project-locations option runs or opens a project for a single process without registering it in hop-config.json. ([#2916](https://github.com/apache/hop/issues/2916))
* Docker image: a sample env file is provided and the documentation now covers how to pass cloud storage credentials (AWS, GCP, Azure and others) to the container. ([#2547](https://github.com/apache/hop/issues/2547), [#8746](https://github.com/apache/hop/issues/8746))
* Logging: Hop now uses the real Log4j2 SLF4J binding with a default configuration and publishes Hop context information as MDC. ([#8374](https://github.com/apache/hop/issues/8374))
* hop-import: the CLI options are aligned with the PDI import dialog in Hop GUI, so both offer the same settings (such as default pipeline and workflow run configurations). ([#8516](https://github.com/apache/hop/issues/8516), [#8587](https://github.com/apache/hop/issues/8587))
* hop-run: new --logfile-append (-lfa) option appends to an existing log file instead of replacing it. ([#4296](https://github.com/apache/hop/issues/4296), [#8689](https://github.com/apache/hop/issues/8689))
:::

:::details[Fixed (8)]
* Docker image: HOP_CONFIG_OPTIONS is now split into separate options before it is passed to hop-conf, so several options work. ([#8299](https://github.com/apache/hop/issues/8299))
* Lint: hop lint accepts -j (project) and -e (environment), and Lint Project / Lint Selected Folder now use the project context. ([#8732](https://github.com/apache/hop/issues/8732), [#8742](https://github.com/apache/hop/issues/8742))
* MS SQL Server native driver: informational driver messages no longer flood the error log in every Hop tool, not just Hop GUI. ([#7297](https://github.com/apache/hop/issues/7297))
* PDI import: imported Pipeline and Workflow actions now get a run configuration, so they no longer abort with "You need to specify a workflow run configuration". ([#3814](https://github.com/apache/hop/issues/3814), [#8641](https://github.com/apache/hop/issues/8641))
* hop doc: starts again; the projects in-memory option is now -ime / --in-memory so it no longer clashes with hop doc -im (--include-metadata). ([#8292](https://github.com/apache/hop/issues/8292))
* hop lint CLI: the version, quiet and severity filter options and JSON output to stdout work correctly, unknown rule ids produce a warning, and the pre-commit hook finds staged files. ([#8731](https://github.com/apache/hop/issues/8731))
* hop-conf: the -sv / -dv variable options now apply the change and no longer just print the usage text. ([#5979](https://github.com/apache/hop/issues/5979), [#7856](https://github.com/apache/hop/issues/7856))
* hop lint: the pre-commit hook lints the staged version of each file (including renamed files), relative paths resolve from the working folder, --fail-on INFO works and rule values are validated. ([#9071](https://github.com/apache/hop/issues/9071), [#9076](https://github.com/apache/hop/issues/9076))
:::

### Plugins & integrations

:::details[New and improved (23)]
* Beam: new MQTT, Debezium, Elasticsearch, Splunk and Snowflake IO transforms. ([#8716](https://github.com/apache/hop/issues/8716))
* OpenLineage: new marketplace plugin that emits run, file and column-level relational lineage to OpenLineage-compatible consumers. ([#2946](https://github.com/apache/hop/issues/2946))
* Spark SQL: a new transform for the native Spark pipeline engine that registers every incoming transform as a temporary view, so one SQL statement can join, union, filter, window and aggregate them under a single Catalyst plan. ([#7544](https://github.com/apache/hop/issues/7544))
* Spark: native Spark pipelines can now run on YARN when Hop GUI, hop-run or Hop Server acts as the Spark driver. ([#9016](https://github.com/apache/hop/issues/9016), [#9020](https://github.com/apache/hop/issues/9020))
* GraphRAG: new samples, a how-to and integration tests that index documents into a knowledge graph and answer questions from it on Neo4j, Memgraph and other graph databases, using standard Hop transforms. ([#8857](https://github.com/apache/hop/issues/8857))
* Native Spark engine: performance improvements and a classloader fix; benchmarks showed roughly 2x faster pipelines. ([#8369](https://github.com/apache/hop/issues/8369))
* AI provider: new Thinking option to switch reasoning off for Ollama thinking models (qwen3, deepseek-r1, gpt-oss, ...), greatly reducing per-row run time. ([#8835](https://github.com/apache/hop/issues/8835), [#8840](https://github.com/apache/hop/issues/8840))
* Arrow Flight server: TLS and authentication options added. ([#8401](https://github.com/apache/hop/issues/8401))
* Arrow Flight server: TLS and authentication options can now be configured. ([#8394](https://github.com/apache/hop/issues/8394))
* Beam: Direct and Dataflow run configurations get a gcpTempLocation option for IOs (such as BigQuery loads) that need a GCS temp location. ([#2355](https://github.com/apache/hop/issues/2355))
* Beam: Write to Log now logs on the Beam Direct runner, and the Beam milestone items for Window by key, an Add Sequence handler, the BigQuery location and skip-validation options, and Kafka Avro reading with a schema registry are closed. ([#2275](https://github.com/apache/hop/issues/2275), [#2340](https://github.com/apache/hop/issues/2340), [#2379](https://github.com/apache/hop/issues/2379), [#2416](https://github.com/apache/hop/issues/2416), [#2675](https://github.com/apache/hop/issues/2675))
* Data Set dialog: new data sets get a suggested name, folder and file name based on the pipeline and transform, and the folder field has a browse button. ([#5370](https://github.com/apache/hop/issues/5370), [#8698](https://github.com/apache/hop/issues/8698))
* Kettle import: connection names that differ only in case are merged into one connection, and references can be aligned to that name. ([#2727](https://github.com/apache/hop/issues/2727))
* Marketplace: JFrog Artifactory can be used as a plugin repository. ([#8073](https://github.com/apache/hop/issues/8073))
* Marketplace: repository definitions can now be imported from a URL. ([#7851](https://github.com/apache/hop/issues/7851))
* Unit testing: writing a full data stream to a data set (golden set) from a pipeline was addressed in this milestone; details to be confirmed. ([#8035](https://github.com/apache/hop/issues/8035))
* Beam BigQuery Input: better handling of RECORD (nested) fields. ([#5064](https://github.com/apache/hop/issues/5064))
* Beam File Output: can write compressed files. ([#2337](https://github.com/apache/hop/issues/2337))
* Beam Flink: the submitted Flink job id is now exposed on the pipeline engine, including when the run later fails. ([#3131](https://github.com/apache/hop/issues/3131))
* Lineage: a new event carries the pipeline hop graph, so lineage sinks can tell which transform fed which; OpenLineage output is unchanged for now. ([#9004](https://github.com/apache/hop/issues/9004))
* Marketplace: the Google plugin is listed under the Technology category. ([#8562](https://github.com/apache/hop/issues/8562))
* Plugin API: a @GuiTab extra tab on pipeline/workflow graphs may return null to skip adding the tab. ([#8491](https://github.com/apache/hop/issues/8491), [#8492](https://github.com/apache/hop/issues/8492))
* Graph databases: the FalkorDB and Redis plugins use the Lettuce 7.9 client; test images and version references in the docs are updated. ([#9079](https://github.com/apache/hop/issues/9079), [#9080](https://github.com/apache/hop/issues/9080))
:::

:::details[Fixed (18)]
* Arrow Flight: the server no longer modifies the data stream object stored in metadata, fixing intermittent round-trip failures in the same JVM. ([#8768](https://github.com/apache/hop/issues/8768), [#8769](https://github.com/apache/hop/issues/8769))
* Beam engines: pipelines using CSV File Input with Lazy conversion enabled no longer fail with a coder decoding error. ([#3724](https://github.com/apache/hop/issues/3724), [#8551](https://github.com/apache/hop/issues/8551))
* Execution information (Neo4j): the Error lineage tab loads without a 'Cannot coerce STRING to LocalDateTime' error, and lineage paths are no longer shown more than once. ([#8704](https://github.com/apache/hop/issues/8704))
* Kettle import: Simple Mapping parameters are kept on import. ([#4501](https://github.com/apache/hop/issues/4501))
* Kettle import: imported Kafka Consumer steps become Hop Kafka Consumer transforms instead of an unknown transform type. ([#4106](https://github.com/apache/hop/issues/4106))
* Kettle/PDI import: imported Kafka Consumer transforms now get a pipeline path with the .hpl extension, so the referenced pipeline opens. ([#4107](https://github.com/apache/hop/issues/4107))
* Lint: corrected core rule descriptions, secrets in nested settings are checked, all variable syntaxes are recognised, unknown rule parameters are warned about, and the Lint Rules Manager can edit every rule without losing data. ([#8591](https://github.com/apache/hop/issues/8591), [#8734](https://github.com/apache/hop/issues/8734))
* Lint: the hardcoded-secret rules no longer flag static constants, the core rule pack recognises Hop GUI's default names, SQL-002 is fixed and an IS_EMPTY condition is added. ([#8420](https://github.com/apache/hop/issues/8420), [#8733](https://github.com/apache/hop/issues/8733))
* Marketplace: the Environment tab is renamed Hop install spec, and Open / Save As now work with '${PROJECT_HOME}'-relative and VFS paths. ([#8059](https://github.com/apache/hop/issues/8059), [#8103](https://github.com/apache/hop/issues/8103))
* Neo4j Cypher transform and Cypher Script action: CALL { ... } IN TRANSACTIONS statements now run, in an auto-commit transaction. ([#8993](https://github.com/apache/hop/issues/8993), [#8994](https://github.com/apache/hop/issues/8994))
* Neo4j execution information location: data, lineage and nested error highlighting now work with Neo4j 5, and the underlying error is shown instead of a generic warning. ([#8280](https://github.com/apache/hop/issues/8280))
* Neo4j execution information location: executions with dates stored by graph logging are read correctly, so the Execution perspective lists them again. ([#9039](https://github.com/apache/hop/issues/9039), [#9044](https://github.com/apache/hop/issues/9044))
* Parquet: plugin installed from the marketplace no longer fails with a missing Hadoop class at run time. ([#8036](https://github.com/apache/hop/issues/8036))
* Pipeline unit tests: database replacements are now actually used at runtime by Database Lookup and other transforms that reference a connection. ([#8417](https://github.com/apache/hop/issues/8417), [#8520](https://github.com/apache/hop/issues/8520))
* Spark engine (Marketplace): the Spark engine package now includes the lakehouse metadata classes it needs on a plain client. ([#8909](https://github.com/apache/hop/issues/8909))
* hop-import: PDI HTTP client steps are converted to Hop's HTTP client transform type, so they no longer show a warning icon. ([#8496](https://github.com/apache/hop/issues/8496))
* hop-import: PDI steps whose id differs from the Hop transform id only in case (CsvInput, ExecSQL, HTTPPOST, ...) are imported with the Hop id, and Hop GUI finds icons regardless of case, so they no longer show the missing-plugin icon. ([#9084](https://github.com/apache/hop/issues/9084), [#9086](https://github.com/apache/hop/issues/9086))
* Spark engine: Spark file output on Windows with master local[*] works without winutils.exe or HADOOP_HOME. ([#8946](https://github.com/apache/hop/issues/8946), [#8951](https://github.com/apache/hop/issues/8951))
:::

### Security

:::details[New and improved (9)]
* Variable resolvers: new AWS Secrets Manager variable resolver. ([#8021](https://github.com/apache/hop/issues/8021))
* HashiCorp Vault variable resolver: supports Kubernetes authentication, so workloads can use short-lived credentials instead of long-lived tokens. ([#8302](https://github.com/apache/hop/issues/8302))
* Hop Server: servlets now reject cross-site browser requests, so a web page an operator visits can no longer trigger actions such as pipeline execution. ([#8371](https://github.com/apache/hop/issues/8371), [#8390](https://github.com/apache/hop/issues/8390))
* Mask Fields: the database mapping store keeps an HMAC instead of the original value when a hash secret is set, avoids duplicate masked values across processes, keeps unmasked values out of error rows, and adds trim and ignore-case options. ([#8791](https://github.com/apache/hop/issues/8791))
* Marketplace: stored repository credentials are no longer sent to a different repository declared in a project's hop-env.yaml. ([#8393](https://github.com/apache/hop/issues/8393))
* Vault and OpenBao variable resolvers: TLS certificates of the secrets server are now verified by default. ([#8392](https://github.com/apache/hop/issues/8392))
* XSD Validator transform and action: external entity resolution is off by default; the dialog checkbox or system property can still enable it. ([#8367](https://github.com/apache/hop/issues/8367), [#8368](https://github.com/apache/hop/issues/8368))
* PGP encrypt/decrypt/verify actions: GnuPG is called with an argument list instead of a shell command, so filenames, key IDs and passphrases are passed literally. ([#8311](https://github.com/apache/hop/issues/8311), [#8316](https://github.com/apache/hop/issues/8316))
* Reviewed and fixed SonarCloud security hotspots. ([#8705](https://github.com/apache/hop/issues/8705))
:::

:::details[Fixed (5)]
* Hop Web: server API authorization now applies to non-normalised paths such as //hop/..., closing a bypass of the role checks. ([#8888](https://github.com/apache/hop/issues/8888), [#8889](https://github.com/apache/hop/issues/8889))
* Hop Web: the embedded Hop Server API under /hop/* now enforces the same role-based access as the web UI, so READ_ONLY users can no longer deploy or run pipelines and workflows through it; the documentation and threat model are updated to match. ([#8150](https://github.com/apache/hop/issues/8150), [#8391](https://github.com/apache/hop/issues/8391))
* Marketplace: stored repository credentials are now scoped to their own repository, so a project naming an unconfigured plugin repository no longer receives the globally configured username/password. ([#8398](https://github.com/apache/hop/issues/8398))
* XML Input Stream (StAX): XML parsing is hardened against XXE, with DTD processing and external entity resolution turned off. ([#8163](https://github.com/apache/hop/issues/8163))
* XSD Validator transform and action: schema validation no longer resolves external entities. ([#3270](https://github.com/apache/hop/issues/3270))
:::

### Documentation

:::details[New and improved (38)]
* Documentation: new how-to on scheduling hop-run with cron, at, systemd, Windows Task Scheduler, Jenkins, Kubernetes CronJobs and Apache Airflow. ([#2632](https://github.com/apache/hop/issues/2632))
* Documentation: rewritten concept pages on pipelines and workflows, with interactive infographics. ([#8640](https://github.com/apache/hop/issues/8640))
* Getting Started guide rewritten with updated structure and content. ([#8447](https://github.com/apache/hop/issues/8447), [#8452](https://github.com/apache/hop/issues/8452))
* New sizing guide in the user manual explaining what uses memory in Hop and how to size both small devices and large batch runs. ([#2408](https://github.com/apache/hop/issues/2408), [#8675](https://github.com/apache/hop/issues/8675))
* Samples project: samples added for many more transforms. ([#2237](https://github.com/apache/hop/issues/2237), [#8786](https://github.com/apache/hop/issues/8786))
* Samples project: samples for all workflow actions, with stubs for actions that need external infrastructure. ([#2238](https://github.com/apache/hop/issues/2238))
* Developer documentation: SDK section split into focused pages and expanded, including working with metadata. ([#8646](https://github.com/apache/hop/issues/8646))
* Docs: new Result sections for many workflow actions describing success conditions, result files and result rows. ([#9000](https://github.com/apache/hop/issues/9000), [#9024](https://github.com/apache/hop/issues/9024), [#9047](https://github.com/apache/hop/issues/9047))
* Documentation: Docker container environment options (config files, key vaults, resolvers) and the recommended upgrade procedure for Hop Web/Docker are documented. ([#6863](https://github.com/apache/hop/issues/6863), [#8113](https://github.com/apache/hop/issues/8113))
* Documentation: Group By, Sort Rows and Unique Rows pages explain why order-dependent transforms do not work on Beam and Spark engines, and the Group By engine support listing is corrected. ([#3360](https://github.com/apache/hop/issues/3360))
* Documentation: a new 'Formatting numbers and dates' page (format, length, precision, time zones, DST hours) and documentation of the Script transform's 'Script result?' column. ([#7902](https://github.com/apache/hop/issues/7902))
* Documentation: a new 'Working with parameters' page covers declaring parameters and setting their values from Hop GUI, hop-run and parent pipelines or workflows. ([#2517](https://github.com/apache/hop/issues/2517))
* Documentation: guidance on change data capture (CDC) approaches with Hop. ([#2647](https://github.com/apache/hop/issues/2647))
* Documentation: new guidance on running Hop projects in the cloud and on deploying projects. ([#2427](https://github.com/apache/hop/issues/2427), [#3062](https://github.com/apache/hop/issues/3062))
* Documentation: new page describing workflow action results (success/failure, metrics, result rows and result files) and how they are passed on. ([#2591](https://github.com/apache/hop/issues/2591))
* Documentation: new pages for the Git and Git commit perspectives, and the Git pages match the current Hop GUI. ([#7120](https://github.com/apache/hop/issues/7120))
* Documentation: running native Spark pipelines on a local Spark standalone cluster from Hop GUI, hop-run or Hop Server. ([#8988](https://github.com/apache/hop/issues/8988))
* Documentation: the configuration perspective's plugin options (including VFS settings) are now documented in tables generated from the plugins themselves. ([#5687](https://github.com/apache/hop/issues/5687))
* Documentation: transform pages indicate whether a transform can act as an input transform that needs no incoming rows. ([#2681](https://github.com/apache/hop/issues/2681))
* New documentation page comparing fields, parameters and variables. ([#3185](https://github.com/apache/hop/issues/3185), [#7960](https://github.com/apache/hop/issues/7960))
* New how-to guide for high-volume, insert-heavy SCD2 dimension loads without per-row lookups. ([#8803](https://github.com/apache/hop/issues/8803), [#8807](https://github.com/apache/hop/issues/8807))
* Table Input documentation: new Parallel reading section on reading one table with several copies using modulo or hash predicates. ([#8785](https://github.com/apache/hop/issues/8785))
* User Defined Java Class documentation now explains the class lifecycle (init, processRow, dispose), how fields are read, what the info, target and test class options do, and includes a complete example. ([#2368](https://github.com/apache/hop/issues/2368), [#8673](https://github.com/apache/hop/issues/8673))
* hop-conf documentation reorganised: it now explains what the tool changes and how to run it, with sections on creating and managing projects and environments. ([#4335](https://github.com/apache/hop/issues/4335), [#9006](https://github.com/apache/hop/issues/9006))
* Developer manual: how to build and preview the documentation locally. ([#2605](https://github.com/apache/hop/issues/2605))
* Docs cleanups: fixes to data stream/DDL, developer docs, icons and shortcuts, missing pages, build warnings, and AI agent guidelines. ([#7922](https://github.com/apache/hop/issues/7922), [#8157](https://github.com/apache/hop/issues/8157), [#8363](https://github.com/apache/hop/issues/8363), [#8364](https://github.com/apache/hop/issues/8364), [#8483](https://github.com/apache/hop/issues/8483), [#8763](https://github.com/apache/hop/issues/8763), [#8296](https://github.com/apache/hop/issues/8296))
* Docs: logging of command line tools to a file, Text file input regex selection, Script transform common methods, YAML Input, and an updated Hop GUI overview. ([#2366](https://github.com/apache/hop/issues/2366), [#2367](https://github.com/apache/hop/issues/2367), [#2651](https://github.com/apache/hop/issues/2651), [#4790](https://github.com/apache/hop/issues/4790), [#7948](https://github.com/apache/hop/issues/7948), [#9026](https://github.com/apache/hop/issues/9026), [#9028](https://github.com/apache/hop/issues/9028), [#9029](https://github.com/apache/hop/issues/9029), [#9040](https://github.com/apache/hop/issues/9040), [#8912](https://github.com/apache/hop/issues/8912))
* Docs: state that UNC paths are not reliably supported. ([#7909](https://github.com/apache/hop/issues/7909))
* Documentation: Specify copies and partitioning are documented as local-engine-only. On Beam (including Flink) and native Spark the runner decides parallelism. ([#3478](https://github.com/apache/hop/issues/3478))
* Documentation: every transform page shows a Supported Engines section, and Beam Direct is removed from those sections. ([#8958](https://github.com/apache/hop/issues/8958))
* Documentation: pages with missing, empty or copied descriptions were fixed, and the docs PR build now fails when a page has no description. ([#2606](https://github.com/apache/hop/issues/2606), [#8957](https://github.com/apache/hop/issues/8957), [#8976](https://github.com/apache/hop/issues/8976), [#8991](https://github.com/apache/hop/issues/8991))
* Documentation: the File Explorer perspective page is updated with the current right-click options and new screenshots. ([#9011](https://github.com/apache/hop/issues/9011))
* Documentation: typo fixes in the manuals, Beam Hive Catalog Input added to the navigation, and a generated transforms overview list. ([#8964](https://github.com/apache/hop/issues/8964), [#8977](https://github.com/apache/hop/issues/8977))
* Documentation: typo fixes in the user manual. ([#8902](https://github.com/apache/hop/issues/8902))
* JavaScript transform docs: explain that stream fields are wrapped Java objects (why Boolean fields are always truthy and == compares identity). ([#2909](https://github.com/apache/hop/issues/2909), [#8166](https://github.com/apache/hop/issues/8166))
* Perspectives documentation updated for the merged File Explorer perspective. ([#6205](https://github.com/apache/hop/issues/6205), [#8714](https://github.com/apache/hop/issues/8714))
* Technical manual removed; its pages were folded into the user and developer manuals. ([#8188](https://github.com/apache/hop/issues/8188), [#8189](https://github.com/apache/hop/issues/8189))
* File Explorer page: documents every file type, Find and Find/Replace, JSON pretty-print and the Markdown preview. ([#9070](https://github.com/apache/hop/issues/9070), [#9088](https://github.com/apache/hop/issues/9088))
:::

:::details[Fixed (5)]
* Calculator: ROUND(A,B) documentation now states the actual default rounding mode (HALF_CEILING) and how to change it. ([#7950](https://github.com/apache/hop/issues/7950))
* Documentation: missing icons fixed for CrateDB Bulk Loader, XML Output (Advanced) and Mask fields, and the plugin page template matches transform and action pages. ([#8893](https://github.com/apache/hop/issues/8893), [#8979](https://github.com/apache/hop/issues/8979))
* Documentation: six pages that were unreachable, including Snowflake ID Generator, are added to the navigation. ([#8895](https://github.com/apache/hop/issues/8895))
* Variables, Azure VFS and Set Variables pages corrected for current hop-conf options and variable storage. ([#9008](https://github.com/apache/hop/issues/9008), [#9025](https://github.com/apache/hop/issues/9025))
* Variable references such as '${PROJECT_HOME}' no longer produce missing-attribute warnings in the docs build. ([#9069](https://github.com/apache/hop/issues/9069), [#9087](https://github.com/apache/hop/issues/9087))
:::

### Translations

:::details[New and improved (3)]
* Added missing translation files. ([#9066](https://github.com/apache/hop/issues/9066), [#9067](https://github.com/apache/hop/issues/9067))
* Translation updates from Weblate for German, Italian, Japanese and Simplified Chinese. ([#7941](https://github.com/apache/hop/issues/7941), [#8556](https://github.com/apache/hop/issues/8556), [#8776](https://github.com/apache/hop/issues/8776), [#8932](https://github.com/apache/hop/issues/8932))
* Brazilian Portuguese translation updates and fixed i18n keyword keys for MQL and File Metadata. ([#7914](https://github.com/apache/hop/issues/7914), [#7965](https://github.com/apache/hop/issues/7965), [#7973](https://github.com/apache/hop/issues/7973), [#7979](https://github.com/apache/hop/issues/7979), [#7981](https://github.com/apache/hop/issues/7981), [#7982](https://github.com/apache/hop/issues/7982), [#8009](https://github.com/apache/hop/issues/8009), [#8070](https://github.com/apache/hop/issues/8070), [#8081](https://github.com/apache/hop/issues/8081), [#9014](https://github.com/apache/hop/issues/9014), [#9018](https://github.com/apache/hop/issues/9018), [#9053](https://github.com/apache/hop/issues/9053), [#9103](https://github.com/apache/hop/issues/9103))
:::

### Build & internal

:::details[All changes (27)]
* Access database plugin: UCanAccess upgraded to 5.2.0. ([#8995](https://github.com/apache/hop/issues/8995))
* Build guardrails catch plugin zips that miss a runtime jar. ([#8041](https://github.com/apache/hop/issues/8041), [#8170](https://github.com/apache/hop/issues/8170))
* Build: Maven 4 support, smoother ECJ setup, Maven warning cleanup. ([#8425](https://github.com/apache/hop/issues/8425), [#8430](https://github.com/apache/hop/issues/8430), [#8055](https://github.com/apache/hop/issues/8055))
* Build: UI tests can run on an isolated display so they do not steal focus. ([#7968](https://github.com/apache/hop/issues/7968))
* Build: faster fast-build profile. ([#8324](https://github.com/apache/hop/issues/8324))
* CI: documentation build is now checked on pull requests so broken docs are caught before merge. ([#8358](https://github.com/apache/hop/issues/8358), [#8359](https://github.com/apache/hop/issues/8359))
* CI: incremental builds of changed modules only and fewer full builds; GitHub Action versions bumped. ([#8355](https://github.com/apache/hop/issues/8355), [#8356](https://github.com/apache/hop/issues/8356), [#8412](https://github.com/apache/hop/issues/8412), [#8413](https://github.com/apache/hop/issues/8413))
* Dependency upgrades for 2.20 (including AWS SDK, Netty, Jetty, SWT/RAP and JDBC drivers) and removal of duplicate jars. ([#8966](https://github.com/apache/hop/issues/8966))
* GUI API: easy way to wrap GUI widgets in a scrolled composite. ([#6748](https://github.com/apache/hop/issues/6748))
* Hop Web: Selenium tests revived. ([#8142](https://github.com/apache/hop/issues/8142))
* New copy utility removes the need for clone and copy constructors in transforms/actions. ([#8031](https://github.com/apache/hop/issues/8031))
* Pipeline clipboard XML handling cleaned up. ([#6955](https://github.com/apache/hop/issues/6955))
* Release housekeeping: zip publishing, p2 versions, formatting, doc version, licenses. ([#7912](https://github.com/apache/hop/issues/7912), [#7913](https://github.com/apache/hop/issues/7913), [#7915](https://github.com/apache/hop/issues/7915), [#7917](https://github.com/apache/hop/issues/7917), [#9068](https://github.com/apache/hop/issues/9068))
* Build: the Monaco editor download URL is configurable, and building Hop behind a corporate firewall is documented. ([#9093](https://github.com/apache/hop/issues/9093), [#9094](https://github.com/apache/hop/issues/9094))
* Standardize Phone Number: libphonenumber upgraded to 9.0.40. ([#8565](https://github.com/apache/hop/issues/8565))
* Build: ECJ compilation works with Debian/Ubuntu Maven, and flaky CI tests are hardened. ([#8406](https://github.com/apache/hop/issues/8406), [#8890](https://github.com/apache/hop/issues/8890))
* Build: fixes for ECJ on Debian/Ubuntu Maven and duplicate fileSets in plugin assembly descriptors. ([#8426](https://github.com/apache/hop/issues/8426), [#8847](https://github.com/apache/hop/issues/8847))
* CI and test hardening: Selenium/Hop Web, integration tests (MinIO replaced by SeaweedFS, MongoDB, OpenLineage, PGP, Beam), Sonar, UI tests and unit test fixes. ([#7972](https://github.com/apache/hop/issues/7972), [#7987](https://github.com/apache/hop/issues/7987), [#8072](https://github.com/apache/hop/issues/8072), [#8092](https://github.com/apache/hop/issues/8092), [#8102](https://github.com/apache/hop/issues/8102), [#8152](https://github.com/apache/hop/issues/8152), [#8158](https://github.com/apache/hop/issues/8158), [#8200](https://github.com/apache/hop/issues/8200), [#8208](https://github.com/apache/hop/issues/8208), [#8237](https://github.com/apache/hop/issues/8237), [#8372](https://github.com/apache/hop/issues/8372), [#8383](https://github.com/apache/hop/issues/8383), [#8384](https://github.com/apache/hop/issues/8384), [#8395](https://github.com/apache/hop/issues/8395), [#8399](https://github.com/apache/hop/issues/8399), [#8416](https://github.com/apache/hop/issues/8416), [#8451](https://github.com/apache/hop/issues/8451), [#8469](https://github.com/apache/hop/issues/8469), [#8547](https://github.com/apache/hop/issues/8547), [#8550](https://github.com/apache/hop/issues/8550), [#8571](https://github.com/apache/hop/issues/8571), [#8615](https://github.com/apache/hop/issues/8615), [#8707](https://github.com/apache/hop/issues/8707), [#8900](https://github.com/apache/hop/issues/8900), [#8920](https://github.com/apache/hop/issues/8920), [#8923](https://github.com/apache/hop/issues/8923), [#8924](https://github.com/apache/hop/issues/8924))
* CI: incremental PR builds no longer fail resolving unpublished P2 wrapper artifacts. ([#8387](https://github.com/apache/hop/issues/8387), [#8388](https://github.com/apache/hop/issues/8388))
* Client assembly ships a single version of each library instead of duplicate jars. ([#8998](https://github.com/apache/hop/issues/8998), [#8999](https://github.com/apache/hop/issues/8999))
* Docs PR build now checks cross-manual xrefs. ([#8885](https://github.com/apache/hop/issues/8885), [#8891](https://github.com/apache/hop/issues/8891))
* Fixed Hop Web and Hop GUI startup failures introduced during 2.20 development. ([#7966](https://github.com/apache/hop/issues/7966), [#8479](https://github.com/apache/hop/issues/8479))
* Hop GUI: removed dead terminal constants and a menu id that collided with full screen. ([#8230](https://github.com/apache/hop/issues/8230))
* Integration tests and daily build: fixed failing tests and a crash when clearing the project namespace. ([#8752](https://github.com/apache/hop/issues/8752), [#8880](https://github.com/apache/hop/issues/8880), [#8952](https://github.com/apache/hop/issues/8952))
* Integration tests: fixed two failing tests (lint DB connections, database value validation). ([#8531](https://github.com/apache/hop/issues/8531))
* Nightly integration test failures fixed. ([#8755](https://github.com/apache/hop/issues/8755), [#8854](https://github.com/apache/hop/issues/8854), [#8837](https://github.com/apache/hop/issues/8837))
* Two Java sources no longer contain a literal NUL byte. ([#8233](https://github.com/apache/hop/issues/8233), [#8235](https://github.com/apache/hop/issues/8235))
:::

## Thank you, contributors

This release contains work by 30 contributors. A special welcome to our ***14 first-time contributors***:
abhiramaab, AnKiT-GaRG2, beatum, budaykiran94, figonugroho, kotwal-itpro, mohitjoshi-hey, nprimaux, SAY-5, samuelwillyanto1, spannm, waterWang, williamWEWEevan, zanarellidev.

Thanks as well to everyone who contributed code, reviews, translations, testing and bug reports:
Adalennis, bamaer, dsanderbi, fskorgen, Givo29, gvdutra, hansva, jbs-atolcd, jefersonminatozaki, leehaut, mattcasters, michaaels, nadment, rmannibucau, sramazzina, vbhanuchander-lang.

Want to join them? Connect on the [mailing lists](https://hop.apache.org/community/mailing-list/), on [Slack](https://hop.apache.org/community/slack/), or on [GitHub](https://github.com/apache/hop).

### Get Apache Hop 2.20 today!

[Download 2.20 now](https://hop.apache.org/download/). The [2.20 milestone](https://github.com/apache/hop/milestone/23?closed=1) has every issue in this release.
