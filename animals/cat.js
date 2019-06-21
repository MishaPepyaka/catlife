strayCat = module.exports =
    [
        {
            type: 'head',
            animal: 'cat',
            size: 'small',
            special: 'whiskers',
            items: [
                {
                    type: 'brain',
                    animal: 'cat',
                    size: 'small'
                } ,
                {
                    type: 'eye',
                    animal: 'cat',
                    size: 'tiny',
                    position: 'left',
                    efficiency: 10
                },
                {
                    type: 'eye',
                    animal: 'cat',
                    size: 'tiny',
                    position: 'right',
                    efficiency: 10
                },
                {
                    type: 'ear',
                    animal: 'cat',
                    size: 'tiny',
                    position: 'left',
                    efficiency: 10
                },
                {
                    type: 'ear',
                    animal: 'cat',
                    size: 'tiny',
                    position: 'right',
                    efficiency: 10
                },
                {
                    type: 'nose',
                    animal: 'cat',
                    size: 'tiny',
                    efficiency: 15
                },
                {
                    type: 'jaw',
                    animal: 'cat',
                    size: 'small',
                    liftPower: 2
                }
            ]
        },
        {
            type: 'neck',
            animal: 'cat',
            size: 'small',
            special: 'catHandle'
        },
        {
            type: 'torso',
            animal: 'cat',
            size: 'small',
            special: 'none',
            items: [
                {
                    type: 'heart',
                    animal: 'cat',
                    size: 'small'
                },
                {
                    type: 'stomach',
                    animal: 'cat',
                    size: 'small'
                },
                {
                    type: 'lung',
                    animal: 'cat',
                    size: 'small',
                    position: 'left'
                },
                {
                    type: 'lung',
                    animal: 'cat',
                    size: 'small',
                    position: 'right'
                },
                {
                    type: 'kidney',
                    animal: 'cat',
                    size: 'small',
                    position: 'left'
                },
                {
                    type: 'kidney',
                    animal: 'cat',
                    size: 'small',
                    position: 'right'
                },
                {
                    type: 'liver',
                    animal: 'cat',
                    size: 'small'
                },
                {
                    type: 'leg',
                    animal: 'cat',
                    size: 'small',
                    position: ['left', 'front'],
                    wSpeed: 5,
                    rSpeed: 10,
                    items: [
                        {
                            type: 'paw',
                            animal: 'cat',
                            size: 'tiny',
                            position: 'left',
                            claws: 'tiny'
                        }
                    ]
                },
                {
                    type: 'leg',
                    animal: 'cat',
                    size: 'small',
                    position: ['right', 'front'],
                    wSpeed: 5,
                    rSpeed: 10,
                    items: [
                        {
                            type: 'paw',
                            animal: 'cat',
                            size: 'tiny',
                            position: 'right',
                            claws: 'tiny'
                        }
                    ]
                }
            ]
        },
        {
            type: 'pelvis',
            animal: 'cat',
            size: 'small',
            special: 'none',
            items: [
                {
                    type: 'leg',
                    animal: 'cat',
                    size: 'small',
                    position: ['left', 'rare'],
                    wSpeed: 7,
                    rSpeed: 15,
                    items: [
                        {
                            type: 'paw',
                            animal: 'cat',
                            size: 'tiny',
                            position: 'left',
                            claws: 'tiny'
                        }
                    ]
                },
                {
                    type: 'leg',
                    animal: 'cat',
                    size: 'small',
                    position: ['right', 'rare'],
                    wSpeed: 7,
                    rSpeed: 15,
                    items: [
                        {
                            type: 'paw',
                            animal: 'cat',
                            size: 'tiny',
                            position: 'right',
                            claws: 'tiny'
                        }
                    ]
                }
            ]
        },
        {
            type: 'tail',
            animal: 'cat',
            size: 'small',
            special: 'balancer'
        }
    ]