const skills = [
    { id: 1, skill: 'JavaScript', learned: true },
    { id: 2, skill: 'Python', learned: false },
    { id: 3, skill: 'Mongo DB', learned: false }
];

module.exports = {
    getAll,
    getOne,
};

function getAll() {
    return skills;
}

function getOne(id) {
    // Use the array.prototype.fund iterator method
    return skills.find(skill => skill.id === parseInt(id));
} 