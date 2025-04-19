const models = require('../database/models');

// Crear una computadora
const createComputers = async (req, res) => {
  try {
    const computer = await models.Computer.create(req.body);
    return res.status(201).json({ computer });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Obtener todas las computadoras
const getAllComputers = async (req, res) => {
  console.log('getting computers');
  try {
    const computers = await models.Computer.findAll();
    return res.status(200).json({ computers });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// Eliminar una computadora
const deleteComputer = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await models.Computer.destroy({
      where: { id }
    });

    if (deleted) {
      return res.status(200).json({ message: 'Computer deleted' });
    }

    return res.status(404).json({ error: 'Computer not found' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


// Actualizar una computadora por ID
const updateComputer = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await models.Computer.update(req.body, {
      where: { id }
    });

    if (updated) {
      const updatedComputer = await models.Computer.findByPk(id);
      return res.status(200).json({ computer: updatedComputer });
    }

    return res.status(404).json({ error: 'Computer not found' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createComputers,
  getAllComputers,
  deleteComputer, 
  updateComputer
};
