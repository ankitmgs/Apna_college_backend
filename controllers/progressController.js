const Progress = require('../models/Progress');

const getProgress = async (req, res) => {
  try {
    const records = await Progress.find({ userId: req.user.id });
    res.json(records.map((r) => ({ problemId: r.problemId, done: r.done })));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const toggleProgress = async (req, res) => {
  try {
    const { problemId } = req.body;
    if (!problemId) return res.status(400).json({ message: 'problemId is required' });

    const existing = await Progress.findOne({ userId: req.user.id, problemId });

    if (existing) {
      existing.done = !existing.done;
      existing.updatedAt = Date.now();
      await existing.save();
      return res.json({ problemId, done: existing.done });
    }

    const record = await Progress.create({ userId: req.user.id, problemId, done: true });
    res.json({ problemId, done: record.done });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getProgress, toggleProgress };
