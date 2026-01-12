const { body, param } = require('express-validator');

const createTaskValidator = [
    body('title')
        .notEmpty()
        .withMessage('Title is required')
        .isLength({ min: 3 })
        .withMessage('Title must be at least 3 characters long'),

    body('description')
        .optional()
        .isString()
        .withMessage('Description must be a string')
];


const updateTaskValidator = [
    param('id')
        .isMongoId()
        .withMessage('Invalid task ID'),

    body('title')
        .optional()
        .isLength({ min: 3 })
        .withMessage('Title must be at least 3 characters long'),

    body('description')
        .optional()
        .isString()
        .withMessage('Description must be a string'),

    body('status')
        .optional()
        .isIn(['pending', 'completed'])
        .withMessage('Status must be either pending or completed')
];

module.exports = {
    createTaskValidator,
    updateTaskValidator
};
