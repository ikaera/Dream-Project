
const { User, Product, Category } = require('../models');
const db = require('./connection');


db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Flying Creatures' },
        { name: 'Bipedal Monsters' },
        { name: 'Aquatic Guardians' },
        { name: 'Forest Spirits' },
    ]);

    console.log('Mythical creature categories seeded');

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            name: 'Fire Dragon',
            description: 'A majestic dragon with fiery scales that can breathe fire and soar through the skies.',
            image: 'fire-dragon.png',
            category: categories[0]._id,
            price: 199.99,
            quantity: 5,
        },
        {
            name: 'Phoenix',
            description: 'A radiant bird with shimmering plumage that represents rebirth and is said to be born from celestial flames.',
            image: 'celestial-phoenix.png',
            category: categories[0]._id,
            price: 149.99,
            quantity: 6,
        },
        {
            name: 'Griffin',
            description: 'A legendary creature with the body, tail, and back legs of a lion; the head and wings of an eagle; and an eagle’s talons as its front feet.',
            image: 'griffin.png',
            category: categories[0]._id,
            price: 299.99,
            quantity: 2,
        },
        {
            name: 'Pegasus',
            description: 'A mythical winged horse with the ability to fly, often depicted as a symbol of wisdom and inspiration.',
            image: 'pegasus.jpg',
            category: categories[0]._id,
            price: 349.99,
            quantity: 3,
        },
        {
            name: 'Vampire',
            description: 'A mythical being that subsists by feeding on the life essence of living creatures, often humans.',
            image: 'vampire.png',
            category: categories[1]._id,
            price: 349.99,
            quantity: 1,
        },
        {
            name: 'Zombie',
            description: 'A dead body that has been brought back to life, typically by supernatural means, and is animated and controlled by a malevolent force.',
            image: 'zombie.png',
            category: categories[1]._id,
            price: 199.99,
            quantity: 4,
        },
        {
            name: 'Leviathan',
            description: 'A massive sea serpent that rules the depths of the ocean, feared by sailors and revered as an aquatic guardian.',
            image: 'leviathan.png',
            category: categories[2]._id,
            price: 249.99,
            quantity: 2,
        },
        {
            name: 'Kraken',
            description: 'A legendary sea monster of giant proportions said to dwell off the coasts of Norway and Greenland.',
            image: 'kraken.jpg',
            category: categories[2]._id,
            price: 399.99,
            quantity: 1,
        },
        {
            name: 'Mermaid',
            description: 'A legendary aquatic creature with the upper body of a woman and the tail of a fish.',
            image: 'mermaid.jpg',
            category: categories[2]._id,
            price: 299.99,
            quantity: 3,
        },
        {
            name: 'Siren',
            description: 'Bird creatures associated with the underworld, bridging the human world, singing a song that offers irresistible forbidden knowledge. ',
            image: 'siren.png',
            category: categories[2]._id,
            price: 279.99,
            quantity: 2,
        },
        {
            name: 'Forest Nymph',
            description: 'A graceful and ethereal spirit of the forest, known for its connection with nature and healing abilities.',
            image: 'forest-nymph.jpg',
            category: categories[3]._id,
            price: 179.99,
            quantity: 4,
        },
        {
            name: 'Dryad',
            description: 'A tree nymph or tree spirit in Greek mythology, typically depicted as a beautiful young woman dwelling in trees.',
            image: 'dryad.jpg',
            category: categories[3]._id,
            price: 229.99,
            quantity: 2,
        },
        {
            name: 'Ent',
            description: 'A tree-like creature in mythology and fantasy fiction, often depicted as a wise and ancient guardian of the forest.',
            image: 'ent.jpg',
            category: categories[3]._id,
            price: 199.99,
            quantity: 3,
        },
    ]);

    console.log('Mythical animals seeded');

    process.exit();
});
