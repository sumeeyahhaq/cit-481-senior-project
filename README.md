AWSomeCovidStats Documentation

Team Members: 
●	Namtae Chanachit - namtae.chanachit.376@my.csun.edu
●	Sumeeyah Haq - sumeeyah.haq.101@my.csun.edu
●	Samvel Vardaniyan - samvel.vardanyan.498@my.csun.edu
●	Kenny Vo - kenny.vo.742@my.csun.edu

Problem Statement:
We are a small group of like-minded individuals who wish to provide our community with crucial resources during unprecedented times. Our goal is to create a platform that educates people about the novel coronavirus and to utilize statistics to shed light on the overall impact of this pandemic.

Solution Walkthrough:
The goal of our senior project was to showcase the knowledge we gained from our CIT Senior Design course to develop a website that highlights our understanding of cloud computing and its many applications. We developed a web application that is hosted by Amazon Web Services. This application will be automated using Ansible and CodeDeploy attached with GitHub actions. We created three EC2 instances that are situated within an AWS Virtual Private Cloud, two of which are on a private subnet while the third is on the public facing subnet. The two private EC2 instances are our failsafe instances and the public facing EC2 is our production instance. We attached an internet gateway and NAT gateway to our VPC so that we can control inbound and outbound traffic to our EC2s and allow the private instances to gain internet access. We also attached an elastic load balancer to control incoming traffic between our instances. We configured a Route 53 service that oversees routing requests made to our Domain Name which will route requests to IP assigned instances. The Route 53 works with an AWS Certificate Manager to ensure our site is secure for all users through the generation of an ACM certificate. 
We also wanted to showcase our knowledge of Continuous Integration and Continuous Deployment services by utilizing Amazon CodeDeploy. We wanted to utilize these services to automate the changes made in our development environment so that it can be efficiently deployed into our working production environment with reduced downtime. Changes made in the GitHub repository are detected by GitHub actions which will run the webhooks added. This will trigger the CodeDeploy to run and make the changes and send it out to our public facing EC2 instances so that all changes made are automatically reflected in the site. 

Objectives:
●	Create a website that provides users the latest data on COVID-19 cases, deaths, and general information to keep the public aware and informed
●	Buy a domain name and ensure connection is secure with a certificate using Amazon Route53 and Amazon Certificate Manager
●	Include automation to application using GitHub, CodeDeploy, and Ansible so that changes made are automatically updated to the site instead of needing to be manually pushed
●	Set up VPC and EC2 instances to work together and plan for failover in the event of the public EC2 instance failing

Services:
Listed below are the services implemented in order to host and make this application.
●	Amazon Certificate Manager - To secure the website
●	Amazon EC2 - For hosting the website
●	Amazon Route 53 - Provides domain name 
●	Amazon VPC - Hold the EC2 instances inside
●	Ansible - Provides automation 
●	AWS CodeDeploy - Provides automation through updating the site when changes are made
●	GitHub - Holds all the code and information for the application

Architecture:
Figure 1A: General overview of AWS Services used in application
 
Figure 1B: Overview of VPC services implemented

Figure 1C: Overview of CodeDeploy automation
 
Issues:
Currently, the website is lagging when users navigate from one page to another. This may be due to the amount of APIs implemented in the site. The site also takes some time to load in general. The application still has issues in updating automatically and requires a manual push at times. CodeDeploy sometimes updates only the index.html file and not all the pages in the application. 
Resources:
●	GitHub Repository
●	Website 
●	Ansible Playbook
