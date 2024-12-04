import { getPool } from '../services/database.js';

export const getExtensions = async (req, res) => {
  const conn = await getPool().getConnection();
  try {
    const extensions = await conn.query(
      'SELECT number, name, tech, status FROM extensions'
    );
    res.json(extensions);
  } catch (error) {
    res.status(500).json({ 
      status: 'error', 
      message: error.message 
    });
  } finally {
    conn.release();
  }
};

export const addExtension = async (req, res) => {
  const { number, name, tech } = req.body;
  const conn = await getPool().getConnection();
  
  try {
    await conn.query(
      'INSERT INTO extensions (number, name, tech, status) VALUES (?, ?, ?, ?)',
      [number, name, tech, 'offline']
    );
    res.status(201).json({ 
      status: 'success', 
      message: 'Extension added successfully' 
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'error', 
      message: error.message 
    });
  } finally {
    conn.release();
  }
};

export const updateExtension = async (req, res) => {
  const { number } = req.params;
  const { name, tech, status } = req.body;
  const conn = await getPool().getConnection();
  
  try {
    await conn.query(
      'UPDATE extensions SET name = ?, tech = ?, status = ? WHERE number = ?',
      [name, tech, status, number]
    );
    res.json({ 
      status: 'success', 
      message: 'Extension updated successfully' 
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'error', 
      message: error.message 
    });
  } finally {
    conn.release();
  }
};

export const deleteExtension = async (req, res) => {
  const { number } = req.params;
  const conn = await getPool().getConnection();
  
  try {
    await conn.query('DELETE FROM extensions WHERE number = ?', [number]);
    res.json({ 
      status: 'success', 
      message: 'Extension deleted successfully' 
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'error', 
      message: error.message 
    });
  } finally {
    conn.release();
  }
};