
# Configure AWS Provider
provider "aws" {
  region = "us-east-1"
  shared_credentials_file = "$HOME/.aws/credentials"
  profile                 = "customprofile"
}
#Create EC2 Instance with specified AMI for public
resource "aws_instance" "terraformEC2deploy-Public" {
  ami           = "ami-0747bdcabd34c712a"
  instance_type = "t2.micro"
  subnet_id = aws_subnet.VPC-subnet.id
  security_groups = [ 
    aws_security_group.terraform-security-group-public.id
   ]
  tags = {
    Name = "TerraForm-Instance-Public"
  }
}

#Create EC2 Instance with specified AMI for private
resource "aws_instance" "terraformEC2deploy-Private" {
  ami           = "ami-0747bdcabd34c712a"
  instance_type = "t2.micro"
  subnet_id = aws_subnet.VPC-subnet.id
  security_groups = [ 
    aws_security_group.terraform-security-group-private.id
   ]
  tags = {
    Name = "TerraForm-Instance-Private"
  }
}

#Create VPC with CIDI-Block range and named VPC terraformTestVPC
resource "aws_vpc" "terraformTestVPC" {
  cidr_block = "10.0.0.0/16"
    tags = {
    Name = "terraformTestVPC"
  }  
}
#Create Subnet
resource "aws_subnet" "VPC-subnet" {
  vpc_id = aws_vpc.terraformTestVPC.id
  cidr_block = "10.0.1.0/24"
}

#Create Elastic - IP
resource "aws_eip" "lb" {
  instance = aws_instance.terraformEC2deploy-Public.id
  vpc      = true
    tags = {
    Name = "terraform-Elastic-IP"
  }
}
#Create Gateway and attached to VPC
resource "aws_internet_gateway" "gw" {
  vpc_id = aws_vpc.terraformTestVPC.id

  tags = {
    Name = "terraform-GW"
  }
}



#Create aws_security group
resource "aws_security_group" "terraform-security-group-public" {
  name        = "terraform-security-group-public"
  description = "SGPublic-Allow TLS inbound traffic"
  vpc_id      = aws_vpc.terraformTestVPC.id

  ingress {
    description      = "TLS from VPC"
    from_port        = 443
    to_port          = 443
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
  }
  ingress {
    from_port        = 80
    to_port          = 80
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
    
  }
  ingress {
    from_port        = 22
    to_port          = 22
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
  }
  egress {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
  
  }

  tags = {
    Name = "Terraform-SG-Public"
  }
}

#Create aws_security group-private
resource "aws_security_group" "terraform-security-group-private" {
  name        = "terraform-security-group-private"
  description = "SGPrivate-Allow TLS inbound traffic"
  vpc_id      = aws_vpc.terraformTestVPC.id

  ingress {
    from_port        = 22
    to_port          = 22
    protocol         = "tcp"
    cidr_blocks      = ["10.0.0.0/16"]
  }
    ingress {
    from_port        = 80
    to_port          = 80
    protocol         = "tcp"
    cidr_blocks      = ["10.0.0.0/16"]
  }
    ingress {
    from_port        = 443
    to_port          = 443
    protocol         = "tcp"
    cidr_blocks      = ["10.0.0.0/16"]
  }


  tags = {
    Name = "Terraform-SG-Private"
  }
}

/*
#Create aws_security group for Bastion-Host
resource "aws_security_group" "bastion-sg" {
  name   = "bastion-security-group"
  vpc_id = aws_vpc.terraformTestVPC.id

  ingress {
    protocol    = "tcp"
    from_port   = 22
    to_port     = 22
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    protocol    = -1
    from_port   = 0 
    to_port     = 0 
    cidr_blocks = ["0.0.0.0/0"]
  }
}
*/

/*
#Create Instance for Bastion Host
resource "aws_instance" "bastion" {
  ami                         = "ami-09e67e426f25ce0d7"
  instance_type               = "t2.micro"
  

    security_groups = [ 
    aws_security_group.bastion-sg.id
   ]

   tags = {
    Name = "TerraForm-Bastion-Host"
  }
}
*/