# Todo List App

Bu bir film uygulamasıdır. Bu websitesinde kullanıcı kayıt yapabilir, oturum açabilir, eğer admin ise film ekleyip silebilir. Filmler kategoriler altında listelenir. Eklenen tüm filmler ana sayfada gösterilir.

## Başlangıç

Bu adımlar, uygulamayı yerel ortamınızda çalıştırmak için gereken adımları içerir.

## Kullanılan Teknolojiler

### Front End :

- Html
- Css
- Bootstrap 5
- Axios
- ReactJs

### Back End :

- Java
- Spring Boot
- Spring Security
- Jwt
- JPA/Hibernate
- Spring Data JPA
- MySQL

### Diğer Araçlar ve Teknolojiler

- Git
- Maven
- Postman
- IntelliJ IDEA
- Visual Studio Code

### Önkoşullar

Aşağıdaki yazılımların sisteminizde yüklü olduğundan emin olun:

- Java Development Kit (JDK) 20
- Node.js
- React Router Dom
- MySQL veritabanı

### Kurulum

1. Bu projeyi bilgisayarınıza klonlayın:

### `git clone <repo-url>`

2. Veritabanı ayarlarını yapılandırın:

- 'application.properties' dosyasında, MySQL veritabanına bağlantı ayarlarınızı belirtin. Örneğin:

```bash
spring.datasource.url=jdbc:mysql://localhost:3306/movieDB
spring.datasource.username=<username>
spring.datasource.password=<password>
```

3. Spring Boot uygulamasını başlatmak için aşağıdaki komutu çalıştırın:

```bash
./mvnw spring-boot:run
```

4. React uygulamasını başlatmak için yeni bir terminal penceresi açın ve proje dizinine gidin. Ardından aşağıdaki komutu çalıştırın:

```bash
cd frontend
npm install
npm start
```

5. Tarayıcınızda http://localhost:3000 adresine gidin ve Movie App uygulamasını görmelisiniz.
