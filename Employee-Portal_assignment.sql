-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: project_assignment_mb
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add user',4,'add_user'),(14,'Can change user',4,'change_user'),(15,'Can delete user',4,'delete_user'),(16,'Can view user',4,'view_user'),(17,'Can add content type',5,'add_contenttype'),(18,'Can change content type',5,'change_contenttype'),(19,'Can delete content type',5,'delete_contenttype'),(20,'Can view content type',5,'view_contenttype'),(21,'Can add session',6,'add_session'),(22,'Can change session',6,'change_session'),(23,'Can delete session',6,'delete_session'),(24,'Can view session',6,'view_session'),(25,'Can add manager',7,'add_manager'),(26,'Can change manager',7,'change_manager'),(27,'Can delete manager',7,'delete_manager'),(28,'Can view manager',7,'view_manager'),(29,'Can add employee',8,'add_employee'),(30,'Can change employee',8,'change_employee'),(31,'Can delete employee',8,'delete_employee'),(32,'Can view employee',8,'view_employee'),(33,'Can add Token',9,'add_token'),(34,'Can change Token',9,'change_token'),(35,'Can delete Token',9,'delete_token'),(36,'Can view Token',9,'view_token'),(37,'Can add token',10,'add_tokenproxy'),(38,'Can change token',10,'change_tokenproxy'),(39,'Can delete token',10,'delete_tokenproxy'),(40,'Can view token',10,'view_tokenproxy');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `authtoken_token`
--

LOCK TABLES `authtoken_token` WRITE;
/*!40000 ALTER TABLE `authtoken_token` DISABLE KEYS */;
/*!40000 ALTER TABLE `authtoken_token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(9,'authtoken','token'),(10,'authtoken','tokenproxy'),(5,'contenttypes','contenttype'),(8,'myapp','employee'),(7,'myapp','manager'),(6,'sessions','session');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2021-06-21 16:28:57.593729'),(2,'auth','0001_initial','2021-06-21 16:29:36.043123'),(3,'admin','0001_initial','2021-06-21 16:29:49.336553'),(4,'admin','0002_logentry_remove_auto_add','2021-06-21 16:29:49.642392'),(5,'admin','0003_logentry_add_action_flag_choices','2021-06-21 16:29:49.933368'),(6,'contenttypes','0002_remove_content_type_name','2021-06-21 16:29:59.667012'),(7,'auth','0002_alter_permission_name_max_length','2021-06-21 16:30:03.189227'),(8,'auth','0003_alter_user_email_max_length','2021-06-21 16:30:04.949083'),(9,'auth','0004_alter_user_username_opts','2021-06-21 16:30:05.079175'),(10,'auth','0005_alter_user_last_login_null','2021-06-21 16:30:07.160005'),(11,'auth','0006_require_contenttypes_0002','2021-06-21 16:30:07.330870'),(12,'auth','0007_alter_validators_add_error_messages','2021-06-21 16:30:07.495348'),(13,'auth','0008_alter_user_username_max_length','2021-06-21 16:30:12.811693'),(14,'auth','0009_alter_user_last_name_max_length','2021-06-21 16:30:20.269397'),(15,'auth','0010_alter_group_name_max_length','2021-06-21 16:30:22.149994'),(16,'auth','0011_update_proxy_permissions','2021-06-21 16:30:22.354459'),(17,'auth','0012_alter_user_first_name_max_length','2021-06-21 16:30:27.812187'),(18,'authtoken','0001_initial','2021-06-21 16:30:37.261219'),(19,'authtoken','0002_auto_20160226_1747','2021-06-21 16:30:37.367806'),(20,'authtoken','0003_tokenproxy','2021-06-21 16:30:37.488369'),(21,'sessions','0001_initial','2021-06-21 16:30:40.559187'),(22,'myapp','0001_initial','2021-06-21 16:33:19.999336'),(23,'myapp','0002_alter_employee_mobile','2021-06-22 08:27:54.958129');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (1,'vaibhav@gmail.com','vaibhav','bhatambrekar','pbkdf2_sha256$260000$jfw1IK33XkM0ihc5Qc8ozK$85k5cEaAMlC6K0Cu77gl3HeCj6Li/zi5d4Z6K4tfRMk=','pune123','1996-03-08','abc','776885655','pune');
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `manager`
--

LOCK TABLES `manager` WRITE;
/*!40000 ALTER TABLE `manager` DISABLE KEYS */;
/*!40000 ALTER TABLE `manager` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'project_assignment_mb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-22 22:17:38
