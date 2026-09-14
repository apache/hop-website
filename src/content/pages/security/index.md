---
title: Apache Hop Security Vulnerabilities
---
## Security Vulnerabilities

Please note that binary patches are not produced for individual vulnerabilities. To obtain the binary fix for a particular vulnerability you should upgrade to an Apache Hop version where that vulnerability has been fixed.

For more information about reporting vulnerabilities, see the [Apache Security Team](https://www.apache.org/security/) page.

## Known Vulnerabilities

[CVE-2024-24683](https://www.cve.org/CVERecord?id=CVE-2024-24683): fixed in Apache Hop 2.8.0. 

Check the [Apache Hop security advisories](https://security.apache.org/projects/hop/) page for more details. 

## With great power comes great responsibility 

The Apache Hop platform allows data engineers and data developers to perform some very powerful operations. 

With great power comes great responsibility: the various transforms and actions allow you to perform potentially destructive operations on your databases, file systems and other areas of your data architecture. Make sure you have the proper permissions and restrictions in place to avoid unwanted operations. 

In addition to these permissions and restrictions, unwanted plugins can be removed from Apache Hop by removing the corresponding folder from the `<HOP>/plugins` folder. For example, to remove the [`Delete files`](https://hop.apache.org/manual/latest/workflow/actions/deletefiles.html) action, delete the `<HOP>/plugins/actions/deletefiles/` folder from your Hop installation.
