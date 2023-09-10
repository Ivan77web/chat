const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
// server.use(async (req, res, next) => {
//     await new Promise((res) => {
//         setTimeout(res, 1500);
//     });
//     next();
// });

// Эндпоинт для поиска юзера
server.post('/findUser', (req, res) => {
    try {
        const { userId } = req.body;
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
        const { users = [] } = db;

        const userFromBd = users.find(
            (user) => user.id === userId,
        );

        if (userFromBd) {
            return res.json(userFromBd);
        }

        return res.status(403).json({ message: 'User not found' });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});

// Эндпоинт для создания данных по конкретному диалогу
server.post('/getDataForCurrentDialog', (req, res) => {
    try {
        const { idDialog } = req.body;
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
        const { dialogs = [] } = db;
        const { users = [] } = db;

        const dialogFromDB = dialogs.find(
            (dialog) => dialog.id === idDialog,
        );

        // const usersFromDB = [];

        // dialogFromDB.participants.map(userId => {
        //     users.map(user => {
        //         if (user.id === userId) {
        //             usersFromDB.push(user);
        //         }
        //     })
        // })

        // if (usersFromDB && dialogFromDB) {
        //     const result = {
        //         id: idDialog,
        //         dialog: dialogFromDB,
        //         users: usersFromDB,
        //     }

        //     return res.json(result);
        // }

        const result = {
            id: idDialog,
            dialog: dialogFromDB,
            users: dialogFromDB.participants,
        }

        return res.json(result);

        // if(dialogFromDB){
        //     return res.json(dialogFromDB);
        // }

        // return res.status(403).json({ message: 'User not found' });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});

// Эндпоинт для логина
server.post('/login', (req, res) => {
    try {
        const { username, password } = req.body;
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
        const { users = [] } = db;

        const userFromBd = users.find(
            (user) => user.username === username && user.password === password,
        );

        if (userFromBd) {
            return res.json(userFromBd);
        }

        return res.status(403).json({ message: 'User not found' });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});

// Получение диалогов
server.post('/getDialog', (req, res) => {
    try {
        const ids = req.body;

        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
        const { dialogs = [] } = db;
        const { users = [] } = db;

        const resDialogs = [];

        ids.map(id => {
            const dialog = dialogs.find(
                (dialog) => dialog.id === id,
            );

            resDialogs.push(dialog);
        })

        return res.json(resDialogs);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});

// Отправка сообщения
server.post('/sendMessage', (req, res) => {
    try {
        const {
            mes,
            autorID,
            date,
            time,
            currentDialogId,
        } = req.body;

        // const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
        let db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
        // const { dialogs = [] } = db;

        let newCurrentDialog = undefined;

        db.dialogs.map((dialog, index) => {
            if (dialog.id === currentDialogId) {
                newCurrentDialog = dialog;

                db.dialogs[index].messages.push({
                    autorId: autorID,
                    message: mes,
                    date: date,
                    time: time,
                })
            }
        })

        fs.writeFileSync(path.resolve(__dirname, 'db.json'), JSON.stringify(db), 'UTF-8')

        return res.json(newCurrentDialog);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});

// проверяем, авторизован ли пользователь
server.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ message: 'AUTH ERROR' });
    }

    next();
});

server.use(router);

// запуск сервера
server.listen(8000, () => {
    console.log('server is running on 8000 port');
});
