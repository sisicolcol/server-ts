"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const app = (0, express_1.default)();
app.get('/', (req, res, next) => {
    res.send('express server start!');
});
app.listen('4000', () => {
    console.log(`
    #############################################
        🛡️ Server listening on port: 8000 🛡️
    #############################################    
    `);
});
//# sourceMappingURL=app.js.map