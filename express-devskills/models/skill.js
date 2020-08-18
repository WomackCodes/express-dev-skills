const skills = [
    { id: 1, skill: 'JavaScript', learned: true },
    { id: 2, skill: 'Python', learned: false },
    { id: 3, skill: 'Mongo DB', learned: false }
];

module.exports = {
    getAll
};

function getAll() {
    return skills;
}