CREATE TABLE IF NOT EXISTS t_codemaster(
id VARCHAR(4) NOT NULL ,
groupid VARCHAR(4) NOT NULL ,
name VARCHAR(50) NOT NULL ,
description VARCHAR(100),
created TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
updated TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
isdeleted VARCHAR(1) NOT NULL default 'N',
primary key (id)
);

INSERT INTO t_codemaster ( id, groupid , name, description) VALUES
('1000', '0000', 'login type', 'Guest, SNS'),
('2000', '0000', 'platform type', 'Android, IOS'),
('3000', '0000', 'file type', 'Image, MS Word, PDF, Text'),
('4000', '0000', 'tag type', 'Skill, Category, Region, Company'),
('5000', '0000', 'interview type', 'APP, ARS, CALL, CHAT, VIDEO, PERSON'),
('6000', '0000', 'hiring type', 'Always Hiring, Now Hiring'),
('7000', '0000', 'source type', 'Gorilla, External'),
('8000', '0000', 'posting status', 'Incompleted, Opened, Closed, Completed, Always'),
('9000', '0000', 'language type', 'English, Korean, Chinese, French'),
('1100', '0000', 'application status', 'In, Out, Hired, Closed'),
('1200', '0000', 'contract status', 'Job offered, Rejected, Accepted'),
('1300', '0000', 'notification status', 'sent, read'),
('1400', '0000', 'message type', 'image, text');

INSERT INTO t_codemaster ( id, groupid , name, description) VALUES
('1500', '0000', 'service type', 'Unlimited, Yearly, Monthly'),
('1600', '0000', 'membership level', 'Premium, Regular, Guest'),
('1501', '1500', 'Unlimited', 'Unlimited serive'),
('1502', '1500', 'Yearly', 'Yearly service'),
('1503', '1500', 'Monthly', 'Monthly service'),
('1601', '1600', 'Premium', 'Premium membership'),
('1602', '1600', 'Regular', 'Regular membership'),
('1603', '1600', 'Guest', 'Guest membership');

INSERT INTO t_codemaster ( id, groupid , name, description) VALUES
('1700', '0000', 'user role', 'Poster, Applicant'),
('1701', '1700', 'Poster', 'Poster role'),
('1702', '1700', 'Applicant', 'Applicant role');

INSERT INTO t_codemaster ( id, groupid , name, description) VALUES
('1800', '0000', 'paid service', 'Video Interview, ARS Interview'),
('1801', '1800', 'Video', 'Video Interview'),
('1802', '1800', 'ARS', 'ARS Interview');

INSERT INTO t_codemaster ( id, groupid , name, description) VALUES
('1001', '1000', 'Guest', 'Anonymous LogIn with UUID(or PKI)'),
('1002', '1000', 'Facebook', 'Facebook LogIn'),
('1003', '1000', 'Google', 'Google account LogIn');
('1004', '1000', 'Twitter', 'Twitter account LogIn');
INSERT INTO t_codemaster ( id, groupid , name, description) VALUES
('2001', '2000', 'Android', 'Android'),
('2002', '2000', 'IOS', 'Iphone');

INSERT INTO t_codemaster ( id, groupid , name, description) VALUES
('3001', '3000', 'Image', 'Image'),
('3002', '3000', 'MS Word', 'MS Word'),
('3003', '3000', 'PDF', 'PDF'),
('3004', '3000', 'Text', 'Text');

INSERT INTO t_codemaster ( id, groupid , name, description) VALUES
('4001', '4000', 'Skill', 'skill'),
('4002', '4000', 'Category', 'category'),
('4003', '4000', 'Region', 'region'),
('4004', '4000', 'Company', 'company');

INSERT INTO t_codemaster ( id, groupid , name, description) VALUES
('5001', '5000', 'APP', 'APP'),
('5002', '5000', 'ARS', 'ARS'),
('5003', '5000', 'CALL', 'CALL'),
('5004', '5000', 'CHAT', 'CHAT'),
('5005', '5000', 'VIDEO', 'VIDEO'),
('5006', '5000', 'PERSON', 'PERSON');

INSERT INTO t_codemaster ( id, groupid , name, description) VALUES
('6001', '6000', 'Always', 'Always Hiring'),
('6002', '6000', 'Now', 'Now Hiring');

INSERT INTO t_codemaster ( id, groupid , name, description) VALUES
('7001', '7000', 'Gorilla', 'Gorilla internal'),
('7002', '7000', 'External', 'External');

INSERT INTO t_codemaster ( id, groupid , name, description) VALUES
('8001', '8000', 'Incompleted', 'Incompleted'),
('8002', '8000', 'Opened', 'Opened'),
('8003', '8000', 'Closed', 'Closed'),
('8004', '8000', 'Completed', 'Completed'),
('8005', '8000', 'Always', 'Always');

INSERT INTO t_codemaster ( id, groupid , name, description) VALUES
('9001', '9000', 'English', 'English'),
('9002', '9000', 'Korean', 'Korean'),
('9003', '9000', 'Chinese', 'Chinese'),
('9004', '9000', 'French', 'French');

INSERT INTO t_codemaster ( id, groupid , name, description) VALUES
('1101', '1100', 'InSchedule', 'In for Scheduling'),
('1102', '1100', 'InEvaluate', 'In for Evaluating'),
('1103', '1100', 'Out', 'Out of Hiring Process'),
('1104', '1100', 'Hired', 'Hired'),
('1105', '1100', 'Closed', 'Posting Closed'),
('1106', '1100', 'InIdle', 'In for Waiting'),
('1107', '1100', 'InScheduleNego', 'In for Schedule Negotiation');


INSERT INTO t_codemaster ( id, groupid , name, description) VALUES
('1201', '1200', 'Offered', 'Job has been offered'),
('1202', '1200', 'Rejected', 'Offer has been rejected'),
('1203', '1200', 'Accepted', 'Offer has been accepted');

INSERT INTO t_codemaster ( id, groupid , name, description) VALUES
('1301', '1300', 'Sent', 'Notification has been sent'),
('1302', '1300', 'Read', 'Notification has been read');

INSERT INTO t_codemaster ( id, groupid , name, description) VALUES
('1401', '1400', 'Image', 'Message format is an image'),
('1402', '1400', 'Text', 'Message format is a text');

CREATE TABLE t_device (
id INT(11) NOT NULL auto_increment,
uuid VARCHAR(64) NOT NULL ,
platformtype VARCHAR(4) NOT NULL ,
osversion VARCHAR(20),
appversion VARCHAR(20),
notification VARCHAR(1),
lastaccessed TIMESTAMP,
fcmregid VARCHAR(255),
created TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
updated TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
isdeleted VARCHAR(1) NOT NULL default 'N',
primary key (id),
FOREIGN KEY (platformtype)
      REFERENCES t_codemaster(id)
      ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE t_location (
id INT(11) NOT NULL auto_increment,
address1 VARCHAR(50),
address2 VARCHAR(50),
unit VARCHAR(50),
fulladdress VARCHAR(500),
postal VARCHAR(10),
citytag INT(11) ,
longitude float(10,6),
latitude float(10,6),
created TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
updated TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
isdeleted VARCHAR(1) NOT NULL default 'N',
primary key (id),
FOREIGN KEY (citytag)
      REFERENCES t_tagmaster(id)
      ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE t_user (
id INT(11) NOT NULL auto_increment,
name VARCHAR(50),
email VARCHAR(50),
firebaseuid VARCHAR(50),
sessiontoken VARCHAR(50),
logintype VARCHAR(4) NOT NULL ,
phone VARCHAR(50),
lastaccessed TIMESTAMP,
ratecount INT,
rateaverage Decimal(5,2),
highestrate INT,
lowestrate INT,
created TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
updated TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
isdeleted VARCHAR(1) NOT NULL default 'N',
primary key (id),
FOREIGN KEY (logintype)
      REFERENCES t_codemaster(id)
      ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE t_userdevice (
id INT(11) NOT NULL auto_increment,
user_id INT(11) NOT NULL ,
device_id INT(11) NOT NULL ,
created TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
updated TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
isdeleted VARCHAR(1) NOT NULL default 'N',
primary key (id),
FOREIGN KEY (user_id)
      REFERENCES t_user(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (device_id)
      REFERENCES t_device(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
unique key (user_id, device_id)
);

CREATE TABLE t_useravatar (
user_id INT(11) NOT NULL ,
image LONGBLOB NOT NULL ,
created TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
updated TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
isdeleted VARCHAR(1) NOT NULL default 'N',
primary key (user_id),
FOREIGN KEY (user_id)
      REFERENCES t_user(id)
      ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE t_avatarhistory (
id INT(11) NOT NULL auto_increment,
user_id INT(11) NOT NULL ,
image LONGBLOB NOT NULL ,
created TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
primary key (id),
FOREIGN KEY (user_id)
      REFERENCES t_user(id)
      ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE t_usercv (
user_id INT(11) NOT NULL ,
filename VARCHAR(50) NOT NULL ,
type VARCHAR(4) NOT NULL ,
fileblob LONGBLOB ,
created TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
updated TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
isdeleted VARCHAR(1) NOT NULL default 'N',
FOREIGN KEY (user_id)
      REFERENCES t_user(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (type)
      REFERENCES t_codemaster(id)
      ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE t_usersetting (
user_id INT(11) NOT NULL ,
notificationenabled VARCHAR(1) NOT NULL default 'Y',
emailenabled VARCHAR(1) NOT NULL default 'Y',
gpsenabled  VARCHAR(1) NOT NULL default 'Y',
created TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
updated TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
isdeleted VARCHAR(1) NOT NULL default 'N',
primary key (user_id),
FOREIGN KEY (user_id)
      REFERENCES t_user(id)
      ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE t_userresult (
id INT(11) NOT NULL auto_increment,
score INT,
note VARCHAR(500),
passed VARCHAR(1) ,
dropped VARCHAR(1),
message VARCHAR(500),
created TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
updated TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
isdeleted VARCHAR(1) NOT NULL default 'N',
primary key (id)
);

CREATE TABLE t_interview (
id INT(11) NOT NULL auto_increment,
type VARCHAR(4) NOT NULL ,
name VARCHAR(20) NOT NULL ,
closing TIMESTAMP ,
decisionby TIMESTAMP ,
created TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
updated TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
isdeleted VARCHAR(1) NOT NULL default 'N',
primary key (id),
FOREIGN KEY (type)
      REFERENCES t_codemaster(id)
      ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE t_schedule (
id INT(11) NOT NULL auto_increment,
maxallowed INT NOT NULL ,
starttime TIMESTAMP NOT NULL ,
endtime TIMESTAMP NOT NULL ,
interview_id INT(11) NOT NULL ,
length INT NOT NULL default 30,
note VARCHAR(500),
created TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
updated TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
isdeleted VARCHAR(1) NOT NULL default 'N',
primary key (id),
FOREIGN KEY (interview_id)
      REFERENCES t_interview(id)
      ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE t_userschedule (
user_id INT(11) NOT NULL ,
schedule_id INT(11) NOT NULL ,
userresult_id INT(11) NOT NULL ,
created TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
updated TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
isdeleted VARCHAR(1) NOT NULL default 'N',
primary key (user_id, schedule_id, userresult_id),
FOREIGN KEY (user_id)
      REFERENCES t_user(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (schedule_id)
      REFERENCES t_schedule(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (userresult_id)
      REFERENCES t_userresult(id)
      ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE TABLE t_userscheduleoffer (
user_id INT(11) NOT NULL,
schedule_id INT(11) NOT NULL,
interview_id INT(11) NOT NULL,
isaccepted VARCHAR(1),
created TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
updated TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
isdeleted VARCHAR(1) NOT NULL default 'N',
FOREIGN KEY (user_id)
      REFERENCES t_user(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (schedule_id)
      REFERENCES t_schedule(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (interview_id)
      REFERENCES t_interview(id)
      ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE TABLE t_interviewlocation (
interview_id INT(11) NOT NULL ,
location_id INT(11) NOT NULL ,
created TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
updated TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
isdeleted VARCHAR(1) NOT NULL default 'N',
primary key (interview_id, location_id),
FOREIGN KEY (interview_id)
      REFERENCES t_interview(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (location_id)
      REFERENCES t_location(id)
      ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE t_interviewquestion (
id INT(11) NOT NULL auto_increment,
interview_id INT(11) NOT NULL ,
no INT NOT NULL ,
question VARCHAR(500) NOT NULL,
created TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
updated TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
isdeleted VARCHAR(1) NOT NULL default 'N',
primary key (id),
FOREIGN KEY (interview_id)
      REFERENCES t_interview(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
unique key (interview_id, no)
);

CREATE TABLE t_interviewanswer (
question_id INT(11) NOT NULL ,
user_id INT(11) NOT NULL ,
answer VARCHAR(500) NOT NULL ,
created TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
updated TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
isdeleted VARCHAR(1) NOT NULL default 'N',
primary key (question_id, user_id),
FOREIGN KEY (question_id)
      REFERENCES t_interviewquestion(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (user_id)
      REFERENCES t_user(id)
      ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE t_usersubscription (
user_id INT(11) NOT NULL ,
paidservice VARCHAR(4) NOT NULL,
validuntil TIMESTAMP NOT NULL,
created TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
updated TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
isdeleted VARCHAR(1) NOT NULL default 'N',
primary key (user_id, paidservice),
FOREIGN KEY (user_id)
      REFERENCES t_user(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (paidservice)
      REFERENCES t_codemaster(id)
      ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE t_membership (
user_id INT(11) NOT NULL ,
membershiptype VARCHAR(4) NOT NULL ,
created TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
updated TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
isdeleted VARCHAR(1) NOT NULL default 'N',
primary key (user_id),
FOREIGN KEY (user_id)
      REFERENCES t_user(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (membershiptype)
      REFERENCES t_codemaster(id)
      ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE t_companyprofile (
id INT(11) NOT NULL auto_increment,
user_id INT(11) NOT NULL ,
email VARCHAR(50) NOT NULL ,
name VARCHAR(50) NOT NULL ,
phone VARCHAR(20) NOT NULL ,
location_id INT(11),
created TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
updated TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
isdeleted VARCHAR(1) NOT NULL default 'N',
primary key (id),
FOREIGN KEY (user_id)
      REFERENCES t_user(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (location_id)
      REFERENCES t_location(id)
      ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE t_companyphoto (
companyprofile_id INT(11) NOT NULL ,
sequence INT NOT NULL ,
image LONGBLOB NOT NULL ,
created TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
updated TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
isdeleted VARCHAR(1) NOT NULL default 'N',
primary key (companyprofile_id, sequence),
FOREIGN KEY (companyprofile_id)
      REFERENCES t_companyprofile(id)
      ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE t_tagmaster (
id INT(11) NOT NULL auto_increment,
type VARCHAR(4) NOT NULL ,
parent_id INT(11) ,
isconfirmed VARCHAR(1) NOT NULL default 'N',
name VARCHAR(50) not null,
description VARCHAR(100),
created TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
updated TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
isdeleted VARCHAR(1) NOT NULL default 'N',
primary key (id),
FOREIGN KEY (parent_id)
      REFERENCES t_tagmaster(id)
      ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE t_jobdescription (
id INT(11) NOT NULL auto_increment,
hiringtype VARCHAR(4) NOT NULL ,
postingtype VARCHAR(4) NOT NULL ,
experienced VARCHAR(1) NOT NULL default 'N',
applicationdeadline TIMESTAMP,
created TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
updated TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
isdeleted VARCHAR(1) NOT NULL default 'N',
primary key (id),
FOREIGN KEY (hiringtype)
      REFERENCES t_codemaster(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (postingtype)
      REFERENCES t_codemaster(id)
      ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE t_jobdescriptionadd (
id INT(11) NOT NULL auto_increment,
filetype VARCHAR(4) NOT NULL ,
content LONGBLOB NOT NULL ,
created TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
updated TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
isdeleted VARCHAR(1) NOT NULL default 'N',
primary key (id),
FOREIGN KEY (filetype)
      REFERENCES t_codemaster(id)
      ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE TABLE t_jobdesclanguage (
description_id INT(11) NOT NULL ,
language VARCHAR(4) NOT NULL ,
created TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
updated TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
isdeleted VARCHAR(1) NOT NULL default 'N',
primary key (description_id, language),
FOREIGN KEY (description_id)
      REFERENCES t_jobdescription(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (language)
      REFERENCES t_codemaster(id)
      ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE TABLE t_postprocess (
id INT(11) NOT NULL auto_increment,
interviewcount INT NOT NULL ,
applicantcount INT NOT NULL ,
currentstage VARCHAR(100) NOT NULL ,
created TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
updated TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
isdeleted VARCHAR(1) NOT NULL default 'N',
primary key (id)
);

CREATE TABLE t_post (
id INT(11) NOT NULL auto_increment,
user_id INT(11) NOT NULL ,
companyprofile_id INT(11),
jobdescription_id INT(11),
jobdescriptionadd_id INT(11),
interviewcount INT NOT NULL ,
status VARCHAR(4) NOT NULL ,
cvrequired VARCHAR(1) NOT NULL default 'Y',
bookmarkcount INT NOT NULL default 0,
postingdate TIMESTAMP,
falseadcount INT NOT NULL default 0,
created TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
updated TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
isdeleted VARCHAR(1) NOT NULL default 'N',
primary key (id),
FOREIGN KEY (user_id)
      REFERENCES t_user(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (status)
      REFERENCES t_codemaster(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (companyprofile_id)
      REFERENCES t_companyprofile(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (jobdescription_id)
      REFERENCES t_jobdescription(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (jobdescriptionadd_id)
      REFERENCES t_jobdescriptionadd(id)
      ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE t_jobdesctag (
description_id INT(11) NOT NULL ,
tag_id INT(11) NOT NULL ,
created TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
updated TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
isdeleted VARCHAR(1) NOT NULL default 'N',
primary key (description_id, tag_id),
FOREIGN KEY (description_id)
      REFERENCES t_jobdescription(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (tag_id)
      REFERENCES t_tagmaster(id)
      ON UPDATE CASCADE ON DELETE CASCADE
);
create unique index  t_tagmaster_tagname_unique on t_tagmaster (name);

CREATE TABLE t_postinterview (
post_id INT(11) NOT NULL ,
sequence INT NOT NULL ,
isfinal VARCHAR(1) NOT NULL ,
interview_id INT(11) NOT NULL ,
applicantcount INT NOT NULL default 0,
created TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
updated TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
isdeleted VARCHAR(1) NOT NULL default 'N',
FOREIGN KEY (post_id)
      REFERENCES t_post(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (interview_id)
      REFERENCES t_interview(id)
      ON UPDATE CASCADE ON DELETE CASCADE
);

create unique index  t_postinterview_postidinterviewid_unique on t_postinterview (post_id, interview_id);

CREATE TABLE t_postuser (
post_id INT(11) NOT NULL ,
user_id INT(11) NOT NULL ,
isbookmarked VARCHAR(1) NOT NULL default 'N',
isapplicant VARCHAR(1) NOT NULL default 'N',
isposter VARCHAR(1) NOT NULL default 'N',
isfalsead VARCHAR(1) NOT NULL default 'N',
userstatus VARCHAR(4) ,
interviewstage INT NOT NULL default 0,
cvtype VARCHAR(4),
cvblob LONGBLOB ,
created TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
updated TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
isdeleted VARCHAR(1) NOT NULL default 'N',
primary key (post_id, user_id),
FOREIGN KEY (post_id)
      REFERENCES t_post(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (user_id)
      REFERENCES t_user(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (userstatus)
      REFERENCES t_codemaster(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (cvtype)
      REFERENCES t_codemaster(id)
      ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE t_rating (
id INT(11) NOT NULL auto_increment,
bestvalue INT NOT NULL ,
worstvalue INT NOT NULL ,
name VARCHAR(50) NOT NULL ,
description VARCHAR(100),
created TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
updated TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
isdeleted VARCHAR(1) NOT NULL default 'N',
primary key (id)
);

CREATE TABLE t_userrating (
writer_id INT(11) NOT NULL ,
subject_id INT(11) NOT NULL ,
post_id INT(11) NOT NULL ,
userrole VARCHAR(4) NOT NULL ,
rating_id INT(11) NOT NULL ,
value Decimal(5,2) NOT NULL ,
created TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
updated TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
isdeleted VARCHAR(1) NOT NULL default 'N',
primary key (writer_id, subject_id, post_id),
FOREIGN KEY (writer_id)
      REFERENCES t_user(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (subject_id)
      REFERENCES t_user(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (userrole)
      REFERENCES t_codemaster(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (post_id)
      REFERENCES t_post(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (rating_id)
      REFERENCES t_rating(id)
      ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE t_match (
id INT(11) NOT NULL auto_increment,
citytag_id INT(11) NOT NULL ,
location_id INT(11) NOT NULL ,
distancewithin INT NOT NULL default 15,
showexternal VARCHAR(1) NOT NULL default 'Y',
showalwayshiring VARCHAR(1) NOT NULL default 'Y',
created TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
updated TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
isdeleted VARCHAR(1) NOT NULL default 'N',
primary key (id),
FOREIGN KEY (citytag_id)
      REFERENCES t_tagmaster(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (location_id)
      REFERENCES t_location(id)
      ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE t_matchlanguage (
match_id INT(11) NOT NULL ,
language VARCHAR(4) NOT NULL ,
created TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
updated TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
isdeleted VARCHAR(1) NOT NULL default 'N',
primary key (match_id, language),
FOREIGN KEY (match_id)
      REFERENCES t_match(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (language)
      REFERENCES t_codemaster(id)
      ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE t_matchtag (
match_id INT(11) NOT NULL ,
tag_id INT(11) NOT NULL ,
created TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
updated TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
isdeleted VARCHAR(1) NOT NULL default 'N',
primary key (match_id, tag_id),
FOREIGN KEY (match_id)
      REFERENCES t_match(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (tag_id)
      REFERENCES t_tagmaster(id)
      ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE t_usermatch (
user_id INT(11) NOT NULL ,
match_id INT(11) NOT NULL,
created TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
updated TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
isdeleted VARCHAR(1) NOT NULL default 'N',
primary key (user_id, match_id),
FOREIGN KEY (match_id)
      REFERENCES t_match(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (user_id)
      REFERENCES t_user(id)
      ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE t_contract (
id INT(11) NOT NULL auto_increment,
postersigned TIMESTAMP ,
applicantsigned TIMESTAMP ,
postersignature LONGBLOB ,
applicantsignature LONGBLOB ,
iscompleted VARCHAR(1) NOT NULL default 'N',
contractfile LONGBLOB ,
created TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
updated TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
isdeleted VARCHAR(1) NOT NULL default 'N',
primary key (id)
);

CREATE TABLE t_postcontract (
post_id INT(11) NOT NULL ,
poster_id INT(11) NOT NULL ,
applicant_id INT(11) NOT NULL ,
contract_id INT(11) NOT NULL ,
status VARCHAR(4) NOT NULL ,
created TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
updated TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
isdeleted VARCHAR(1) NOT NULL default 'N',
primary key (post_id, poster_id, applicant_id, contract_id),
FOREIGN KEY (poster_id)
      REFERENCES t_user(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (applicant_id)
      REFERENCES t_user(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (status)
      REFERENCES t_codemaster(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (post_id)
      REFERENCES t_post(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (contract_id)
      REFERENCES t_contract(id)
      ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE t_systemlog (
id INT(11) NOT NULL auto_increment,
message VARCHAR(500) NOT NULL ,
created TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
updated TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
isdeleted VARCHAR(1) NOT NULL default 'N',
primary key (id)
);

CREATE TABLE t_usersystem (
post_id INT(11) NOT NULL ,
poster_id INT(11) NOT NULL ,
applicant_id INT(11) NOT NULL ,
systemlog_id INT(11) NOT NULL ,
status VARCHAR(4) NOT NULL ,
created TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
updated TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
isdeleted VARCHAR(1) NOT NULL default 'N',
primary key (post_id, poster_id, applicant_id, systemlog_id),
FOREIGN KEY (poster_id)
      REFERENCES t_user(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (applicant_id)
      REFERENCES t_user(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (status)
      REFERENCES t_codemaster(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (post_id)
      REFERENCES t_post(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (systemlog_id)
      REFERENCES t_systemlog(id)
      ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE t_uservalidstatus (
uuid VARCHAR(32) NOT NULL,
user_id INT(11) NOT NULL ,
post_id INT(11) NOT NULL ,
message_id INT(11) NOT NULL ,
interview_id INT(11) ,
primary key (uuid),
FOREIGN KEY (user_id)
      REFERENCES t_user(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (post_id)
      REFERENCES t_post(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (message_id)
      REFERENCES t_usersystemlog(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (interview_id)
      REFERENCES t_interview(id)
      ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE TABLE t_usersystemlog (
id INT(11) NOT NULL auto_increment,
user_id INT(11) NOT NULL ,
message BLOB NOT NULL ,
status VARCHAR(4) NOT NULL default '1301',
created TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
updated TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
isdeleted VARCHAR(1) NOT NULL default 'N',
primary key (id),
FOREIGN KEY (user_id)
      REFERENCES t_user(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (status)
      REFERENCES t_codemaster(id)
      ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE TABLE t_message (
id INT(11) NOT NULL auto_increment,
type VARCHAR(4) NOT NULL ,
content LONGBLOB NOT NULL ,
created TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
updated TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
isdeleted VARCHAR(1) NOT NULL default 'N',
primary key (id),
FOREIGN KEY (type)
      REFERENCES t_codemaster(id)
      ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE t_usermessage (
post_id INT(11) NOT NULL ,
from_id INT(11) NOT NULL ,
to_id INT(11) NOT NULL ,
message_id INT(11) NOT NULL ,
status VARCHAR(4) NOT NULL ,
created TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
updated TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
isdeleted VARCHAR(1) NOT NULL default 'N',
primary key (post_id, from_id, to_id, message_id),
FOREIGN KEY (from_id)
      REFERENCES t_user(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (to_id)
      REFERENCES t_user(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (status)
      REFERENCES t_codemaster(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (post_id)
      REFERENCES t_post(id)
      ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (message_id)
      REFERENCES t_message(id)
      ON UPDATE CASCADE ON DELETE CASCADE
);


CREATE TABLE `t_appconfig` (
`id` int(11) NOT NULL auto_increment,
  `application_secret_key` varchar(150) NOT NULL,
  primary key(id)
);

INSERT INTO `t_appconfig` (`application_secret_key`) VALUES
('85EB5623D4ED03B64C152B24E704E150E60C9F69CBD8F57BAF8929A18077EC23');

create view v_postdetail as
  select aaaaaa.*, g.interviewstage from (
    select aaaaa.*, f.name citytag from (
    select aaaa.*,  e.filetype, e.content from
      (select aaa.*, d.unit, d.fulladdress, d.citytag_id, d.postal, d.longitude, d.latitude from
        (select aa.*, c.hiringtype, c.postingtype, c.experienced, UNIX_TIMESTAMP(c.applicationdeadline)*1000 applicationdeadline, c.title from
          (select a.id as post_id, a.companyprofile_id, a.user_id, a.status, a.bookmarkcount, UNIX_TIMESTAMP(a.postingdate)*1000 postingdate, a.falseadcount, a.interviewcount, a.cvrequired, a.applicantcount, a.jobdescription_id, a.jobdescriptionadd_id, b.location_id, b.email, b.name, b.phone
          from t_post a left join t_companyprofile b
          on a.companyprofile_id = b.id where a.isdeleted ='N'and (b.isdeleted is null or b.isdeleted='N') ) aa
          left join t_jobdescription c on aa.jobdescription_id=c.id where (c.isdeleted is null or c.isdeleted='N')) aaa
        left join t_location d on aaa.location_id=d.id where (d.isdeleted is null or d.isdeleted='N')) aaaa
      left join t_jobdescriptionadd e on aaaa.jobdescriptionadd_id= e.id where (e.isdeleted is null or e.isdeleted='N')) aaaaa
    left join t_tagmaster f on aaaaa.citytag_id=f.id where (f.isdeleted is null or f.isdeleted='N')) aaaaaa
  left join t_postuser g on (aaaaaa.post_id=g.post_id and aaaaaa.user_id=g.user_id)

  create view v_interviewdetail as
    select aaa.*, f.name citytag from (
      select aa.*, e.unit, e.fulladdress, e.citytag_id, e.longitude, e.latitude, e.postal from
      (select a.id interview_id, a.type, a.name, UNIX_TIMESTAMP(a.closing)*1000 closing, UNIX_TIMESTAMP(a.decisionby)*1000 decisionby, a.icon, d.location_id
        from t_interview a
        left join t_interviewlocation d on a.id = d.interview_id where (d.isdeleted is null or d.isdeleted='N')) aa
      left join t_location e on aa.location_id=e.id where (e.isdeleted is null or e.isdeleted='N')) aaa
    left join t_tagmaster f on aaa.citytag_id=f.id where (f.isdeleted is null or f.isdeleted='N')


create view v_interviewdetail_old as
select aaaa.*, e.address1, e.address2, e.longitude, e.latitude, e.postal from
(select aaa.*, d.location_id from
  (select aa.*, c.user_id, c.answer from
    (select a.id interview_id, a.type, a.name, UNIX_TIMESTAMP(a.closing)*1000 closing, UNIX_TIMESTAMP(a.decisionby)*1000 decisionby, a.icon, b.id question_id, b.no, b.question
      from t_interview a
        left join t_interviewquestion b
        on a.id = b.interview_id where a.isdeleted='N' and (b.isdeleted is null or b.isdeleted='N') ) aa
    left join t_interviewanswer c
    on aa.interview_id = c.question_id where (c.isdeleted is null or c.isdeleted='N') ) aaa
  left join t_interviewlocation d on aaa.interview_id = d.interview_id where (d.isdeleted is null or d.isdeleted='N') ) aaaa
left join t_location e on aaaa.location_id=e.id where (e.isdeleted is null or e.isdeleted='N')

create view v_tags as
select a.id, a.name, a.final_id, a.type, b.name final_name from
(select id, name, type, COALESCE(parent_id, id) final_id from t_tagmaster where isdeleted='N') a, t_tagmaster b
where a.final_id=b.id and b.isdeleted='N'

create view v_userschedule as
select a.user_id, a.schedule_id, a.userresult_id, b.maxallowed, UNIX_TIMESTAMP(b.starttime)*1000 starttime, UNIX_TIMESTAMP(b.endtime)*1000 endtime, b.interview_id, b.length, c.score, c.note, c.passed, c.dropped, c.message from t_userschedule a, t_schedule b, t_userresult c where a.schedule_id=b.id and a.userresult_id=c.id and a.isdeleted='N' and b.isdeleted='N' and c.isdeleted='N'

create view v_userdetail as
select b.user_id, c.name, c.email, c.logintype, c.phone, c.lastaccessed userlastaccessed, c.ratecount, c.rateaverage, c.highestrate, c.lowestrate, c.snsuid, a.fcmregid, a.lastaccessed devicelastaccessed, a.notification, a.appversion, a.platformtype, a.osversion, a.uuid from t_device a, t_userdevice b, t_user c where a.id=b.device_id and b.user_id=c.id and c.isdeleted='N' and a.isdeleted='N' order by b.user_id, b.device_id
