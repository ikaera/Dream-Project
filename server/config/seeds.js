
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
            image: 'fire-dragon.jpg',
            category: categories[0]._id,
            price: 499.99,
            quantity: 5,
        },
        {
            name: 'Ice Dragon',
            description: 'A dragon made of living ice with the ability to freeze its victim with its breath.',
            image: 'ice-dragon.jpg',
            category: categories[0]._id,
            price: 499.99,
            quantity: 5,
        },
        {
            name: 'Phoenix',
            description: 'A radiant bird with shimmering plumage that represents rebirth and is said to be born from celestial flames.',
            image: 'celestial-phoenix.jpg',
            category: categories[0]._id,
            price: 949.99,
            quantity: 5,
        },
        {
            name: 'Griffin',
            description: 'A legendary creature with the body, tail, and back legs of a lion; the head and wings of an eagle; and an eagle’s talons as its front feet.',
            image: 'griffin.jpg',
            category: categories[0]._id,
            price: 899.99,
            quantity: 10,
        },
        {
            name: 'Pegasus',
            description: 'A mythical winged horse with the ability to fly, often depicted as a symbol of wisdom and inspiration.',
            image: 'pegasus.jpg',
            category: categories[0]._id,
            price: 349.99,
            quantity: 10,
        },
        {
            name: 'Vampire',
            description: 'A mythical being that subsists by feeding on the life essence of living creatures, often humans.',
            image: 'vampire.jpg',
            category: categories[1]._id,
            price: 349.99,
            quantity: 20,
        },
        {
            name: 'Zombie',
            description: 'A dead body that has been brought back to life, typically by supernatural means, and is animated and controlled by a malevolent force.',
            image: 'zombie.jpg',
            category: categories[1]._id,
            price: 199.99,
            quantity: 100,
        },
        {
            name: 'Kaiba Dragon',
            description: 'This fantastical being is like no other, blending the fearsome power of a dragon with the boundless energy of an Australian Shepherd.',
            image: 'kaiba-dragon.jpg',
            category: categories[0]._id,
            price: 999.99,
            quantity: 1,
        },
        {
            name: 'Uruk-hai',
            description: 'Brutal warriors of Mordor, these crossbreeds of human and orc are equivalent to the corrupted version of half-elves.',
            image: 'uruk-hai.jpeg',
            category: categories[1]._id,
            price: 250.99,
            quantity: 100,
        },
        {
            name: 'Faun',
            description: 'A creature of Roman origin, part human and part goat.',
            image: 'faun.jpg',
            category: categories[1]._id,
            price: 300.99,
            quantity: 15,
        },
        {
            name: 'Satyr',
            description: 'Half-human and half-goat, Satyrs are mischievous and playful forest dwellers.',
            image: 'satyr.jpg',
            category: categories[3]._id,
            price: 99.99,
            quantity: 20,
        },
        {
            name: 'Whoo-ee',
            description: 'Wild orange striped beast that delights in eating squirrels and fighting foxes',
            image: 'whooee.jpg',
            category: categories[3]._id,
            price: 666.99,
            quantity: 1,
        },
        {
            name: 'Leviathan',
            description: 'A massive sea serpent that rules the depths of the ocean, feared by sailors and revered as an aquatic guardian.',
            image: 'leviathan.jpg',
            category: categories[2]._id,
            price: 249.99,
            quantity: 7,
        },
        {
            name: 'Kraken',
            description: 'A legendary sea monster of giant proportions said to dwell off the coasts of Norway and Greenland.',
            image: 'kraken.jpg',
            category: categories[2]._id,
            price: 399.99,
            quantity: 5,
        },
        {
            name: 'Centaur',
            description: 'These mythical beings have the body of a horse and the upper torso of a human.',
            image: 'centaur.jpg',
            category: categories[3]._id,
            price: 199.99,
            quantity: 50,
        },
        {
            name: 'Mermaid',
            description: 'A legendary aquatic creature with the upper body of a woman and the tail of a fish.',
            image: 'mermaid.jpg',
            category: categories[2]._id,
            price: 299.99,
            quantity: 20,
        },
        {
            name: 'Siren',
            description: 'Bird creatures associated with the underworld, bridging the human world, singing a song that offers irresistible forbidden knowledge.',
            image: 'siren.jpg',
            category: categories[2]._id,
            price: 279.99,
            quantity: 30,
        },
        {
            name: 'Forest Nymph',
            description: 'A graceful and ethereal spirit of the forest, known for its connection with nature and healing abilities.',
            image: 'forest-nymph.jpg',
            category: categories[3]._id,
            price: 179.99,
            quantity: 40,
        },
        {
            name: 'Kelpie',
            description: 'Hailing from Scottish folklore, kelpies are aquatic spirits that take the form of horses.',
            image: 'kelpie.jpg',
            category: categories[2]._id,
            price: 499.99,
            quantity: 25,
        },
        {
            name: 'Dryad',
            description: 'A tree nymph or tree spirit in Greek mythology, typically depicted as a beautiful young woman dwelling in trees.',
            image: 'dryad.jpg',
            category: categories[3]._id,
            price: 229.99,
            quantity: 20,
        },
        {
            name: 'Ent',
            description: 'A tree-like creature in mythology and fantasy fiction, often depicted as a wise and ancient guardian of the forest.',
            image: 'ent.jpg',
            category: categories[3]._id,
            price: 199.99,
            quantity: 30,
        },
    ]);

    console.log('Mythical animals seeded');

    process.exit();
});
