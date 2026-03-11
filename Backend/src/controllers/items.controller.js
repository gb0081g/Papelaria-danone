const repo = require("../repositories/item.repo");

async function list(req, res, next) {
  try {
    const items = await repo.list(req.user.id);
    res.json(items);
  } catch (e) { next(e); }
}

async function create(req, res, next) {
  try {
    const id = await repo.create(req.user.id, req.body);
    res.status(201).json({ id });
  } catch (e) { next(e); }
}

module.exports = { list, create };