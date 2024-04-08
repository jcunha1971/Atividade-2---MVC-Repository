const userRepository = require('../repositories/userRepository');

exports.createUser = async (req, res) => {
    try {
        const user = await userRepository.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await userRepository.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await userRepository.findById(id);
        if (!user) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await userRepository.updateById(id, req.body);
        if (!user) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await userRepository.deleteById(id);
        if (!user) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }
        res.status(200).json({ message: "Usuário excluído com sucesso" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
