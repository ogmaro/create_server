"use strict";
// Create a simple node application that has a POST, GET, PUT and DELETE endpoint,
// using express. The POST data should create new data, the GET endpoint should
// get the created or updated data as applicable, the PUT endpoint should UPDATE
// the data, and the DELETE endpoint should delete the data. No persistence is
// required. No Deployment is required.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
let data = [
    {
        name: 'Patric',
        age: '30',
    },
];
app.get('/', (req, res) => {
    res.send(data);
});
app.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newData = {
        name: req.query.name,
        age: req.query.age,
    };
    data.push(newData);
    res.send(data);
}));
app.put('/', (req, res) => {
    if (data[0].name === req.query.name) {
        const response = {
            message: 'user exist',
            data: data[0],
        };
        res.send(response);
    }
    else if (data[0].name !== req.query.name) {
        data[0].name = req.query.name;
        data[0].age = req.query.age;
        res.send(data);
    }
    else {
        res.send('Unknown error');
    }
});
app.delete('/', (req, res) => {
    if (data[0].name === req.query.name) {
        data.pop();
        res.send(data);
    }
    else {
        res.send('user not found');
    }
});
app.listen(3000, () => {
    console.log('listening again');
});
