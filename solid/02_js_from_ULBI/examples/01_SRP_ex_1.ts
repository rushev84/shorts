const generatedId = () => Date.now() * Math.random();

// Так делать не надо!

class User {
    id: number;
    username: string;
    password: string;

    constructor(username: string, password: string) {
        this.id = generatedId();
        this.username = username;
        this.password = password;
    }

    saveToDatabase() {
        // сохранение пользователя в БД
    }

    log() {
        console.log(this);
    }

    send() {
        return http.send();
    }
}


// А вот так надо!

class UserRepository {
    save(user: User) {
        // сохранение пользователя в БД
    }
}

class UserLogger {
    log(user: User) {
        console.log(this);
    }
}

class UserController {
    send(user: User) {
        return http.send();
    }
}