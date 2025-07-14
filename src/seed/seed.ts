interface SeedProduct {
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: ValidSizes[];
    slug: string;
    tags: string[];
    title: string;
    type: ValidTypes;
    gender: 'desktop'|'laptop'|'all-in-one'|'impresora'
}

type ValidSizes = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';
type ValidTypes = 'shirts'|'pants'|'hoodies'|'hats';

interface SeedData {
    products: SeedProduct[],
}




export const initialData: SeedData = {
    products: [
        {
            description: "Notebook compacta, ligera y elegante de color negro mate. Es la combinación perfecta entre elegancia y productividad. Modelo Latitude.Se compone por un procesador Intel Core I3 7020u, Memoria ram 8gb DDR4, Disco Duro SSD 128gb, Pantalla HD 14 pulgadas, Red Ethernet y Wifi AC, Bateria 3 celdas, Windows 10 Pro, Garantia: 90 dias ",
            images: [
                'dell_latitude_3300_1.jpg',
                'dell_latitude_3300_2.jpg',                
            ],
            inStock: 2,
            price: 280,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "mens_chill_crew_neck_sweatshirt",
            type: 'shirts',
            tags: ['sweatshirt'],
            title: "Laptop Dell Latitude 3300",
            gender: 'laptop'
        },
        {
            description: "Notebook compacta y elegante, repotenciada y actualizada al mejor precio.Puedes obtener un equipo que reune un precio accesible con el mejor rendimiento ya que cuenta con un procesador I5 8350U, 8gb ddr4 de memoria ram (puede ser ampliada), un disco duro de estado solido de 256gb, Pantalla full hd de 14 pulgadas. Garantia 90 dias",
            images: [
                'dell_latitude_7390_1.jpg',
                'dell_latitude_7390_2.jpg',
            ],
            inStock: 5,
            price: 340,
            sizes: ['XS','S','M','XL','XXL'],
            slug: "men_quilted_shirt_jacket",
            type: 'shirts',
            tags: ['jacket'],
            title: "Laptop Dell Latitude 7390",
            gender: 'laptop'
        },
        
        {
            description: "Notebook compacta y elegante, repotenciada y actualizada al mejor precio.Puedes obtener un equipo que reune un precio accesible con el mejor rendimiento ya que cuenta con un procesador I5 5300U, 8gb ddr4 de memoria ram (puede ser ampliada), un disco duro de estado solido de 256gb, Pantalla full hd de 14 pulgadas. Garantia 90 dias",
            images: [
                'dell_latitude_5450_1.jpg',
                'dell_latitude_5450_2.png'
            ],
            inStock: 10,
            price: 300,
            sizes: ['S','M','L','XL','XXL'],
            slug: "men_raven_lightweight_zip_up_bomber_jacket",
            type: 'shirts',
            tags: ['shirt'],
            title: "Laptop Dell Latitude 5450",
            gender: 'laptop'
        },

        {
            description: "Si necesitas una laptop portátil, durable y con rendimiento suficiente para tareas de oficina, videoconferencias y multitarea moderada esta es la recomendada para ti. Intel Core i5 de 7ma generación, 8GB de RAM DDR4, SSD de 256GB, Pantalla de 14 pulgadas HD (posiblemente 1366 x 768), USB 3.0, HDMI, lector de tarjetas microSD. Wi-Fi. Garantia 90 dias",
            images: [
                'dell_latitude_5480_1.jpg',
                'dell_latitude_5480_2.jpg',
            ],
            inStock: 50,
            price: 320,
            sizes: ['XS','S','M','L'],
            slug: "men_turbine_long_sleeve_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Laptop Dell Latitude 5480",
            gender: 'laptop'
        },
        {
            description: "La IdeaPad™ 1i eleva el nivel de cualquier portátil asequible con un procesador Intel® Celeron de alta eficiencia en un chasis delgado y compacto de 17,9 mm que facilita la multitarea, a la vez que optimiza la eficiencia energética con hasta 11 horas de duración de batería y carga rápida. Obtén más valor con biseles estrechos de cuatro lados para una pantalla máxima, altavoces Dolby Audio™ y Flip to Start para un arranque instantáneo. Optimiza tu experiencia de videollamadas con una cámara de 720p. Es ideal para estudiantes y tareas básicas del hogar",
            images: [
                'laptop_lenovo_celeron_1.jpg',
                'laptop_lenovo_celeron_2.jpg',
            ],
            inStock: 50,
            price: 300,
            sizes: ['M','L','XL','XXL'],
            slug: "men_turbine_short_sleeve_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Lenovo Ideapad 1i Intel N4500",
            gender: 'laptop'
        },
        {
            description: "Designed for comfort, the Cybertruck Owl Tee is made from 100% cotton and features our signature Cybertruck icon on the back.",
            images: [
                'laptop_lenovo_3i_2.jpg',
                'laptop_lenovo_3i_1.jpg',
            ],
            inStock: 0,
            price: 495,
            sizes: ['M','L','XL','XXL'],
            slug: "men_cybertruck_owl_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Lenovo Ideapad 3i Intel I3 N305",
            gender: 'laptop'
        },
        {
            description: "Disfrute de un rendimiento ágil y silencioso, con procesadores Intel® Core™ de 12.ª generación combinados con opciones de PCIe SSD.Disfrute de teclas de mayor tamaño y de un amplio panel táctil para desplazarse con facilidad por el contenido. El chip gráfico Intel Iris Xe te permitira ejecutar aplicaciones altamente productiva. La mejor combinacion de poder y elegancia la obtienes con este precioso modelo de Dell. Garantia 12 meses.",
            images: [
                'laptop_dell_inspiron_i7_1.jpg',
                'laptop_dell_inspiron_i7_2.jpg',
            ],
            inStock: 15,
            price: 950,
            sizes: ['S','M','L','XL'],
            slug: "men_solar_roof_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Laptop Dell Inspiron 3520 I7 12va 15.6 HD",
            gender: 'laptop'
        },
        {
            description: "Reune lo mejor en cuanto a productividad, comodidad y estetica. Este ordenador todo en uno viene equipado con una pantalla de 23 pulgadas lo que te permite desplegar aplicaciones donde debes notar los ultimos detalles de una imagen. Configurado con un procesador Intel I5 6500 de sexta generacion puedes darle un uso productivo y profesional. Tiene 8gb DDR4 de Ram y cuenta con 2 disco duros, donde reside el sistema operativo de 128gb SSD y uno auxiliar de 500GB para respaldar tu información. Su elegancia y compactibilidad hacen de este equipo ideal para su empresa y oficina. Incluye garantia por 90 dias",
            images: [
                'all_in_one_L3n90AV_1.jpg',
                'all_in_one_L3n90AV_2.jpg',
            ],
            inStock: 17,
            price: 35,
            sizes: ['XS','S','XL','XXL'],
            slug: "men_let_the_sun_shine_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "HP L3N90AV 23 All in One 800 G2",
            gender: 'all-in-one'
        },
        {
            description: "Con factor de forma reducido este computador le permite ocupar menos espacio y su combinacion de rendimiento es la combinacion perfecta entre un buen diseño y alta productividad. Equipado con un procesador Intel de 7ma generacion I5 con memorias ddr4 de 8gb y disco de duro de la mas nueva tecnologia SSD viene a ser ideal para desplegar las aplicaciones de ofimatica y sistemas CRM en tu negocio o pequeña empresa. Asi mismo llega a obtener un plus en su procesamiento de tareas por la condicion de frecuencia turbo boost llegando alcanzar hasta 3.50 Ghz. Garantia 90 dias",
            images: [
                'I5_Y3A10AV_1.jpg',
                'I5_Y3A10AV_2.jpg',
            ],
            inStock: 12,
            price: 35,
            sizes: ['XS','S','M'],
            slug: "men_3d_large_wordmark_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Desktop HP Prodesk 400 g4 I5 7ma",
            gender: 'desktop'
        },
        {
            description: "Con factor de forma reducido este computador le permite ocupar menos espacio y su combinacion de rendimiento es la combinacion perfecta entre un buen diseño y alta productividad. Equipado con un procesador Intel de 7ma generacion I5 con memorias ddr4 de 8gb y disco de duro de la mas nueva tecnologia SSD viene a ser ideal para desplegar las aplicaciones de ofimatica y sistemas CRM en tu negocio o pequeña empresa. Asi mismo llega a obtener un plus en su procesamiento de tareas por la condicion de frecuencia turbo boost llegando alcanzar hasta 3.50 Ghz. Garantia 90 dias",
            images: [
                'hp_prodesk_i7_1.jpg',
                'hp_prodesk_i7_2.jpg',
            ],
            inStock: 5,
            price: 35,
            sizes: ['XS','S'],
            slug: "men_3d_t_logo_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Desktop Hp Prodesk 600 G3",
            gender: 'desktop'
        },
        {
            description: "Este computador de la marca Dell modelo optiplex viene equipado con un procesador Intel i7 de 4ta generacion, disco duro mecanico de 500 Gb y una memoria ram DDR3 8 Gb. Unidad lectora de Dvd, puertos usb, puertos ethernet. Ideal para negocios y oficina. 90 dias de garantia",
            images: [
                'optiplex_9020_2.jpg',
                'optiplex_9020_1.jpg',
            ],
            inStock: 2,
            price: 35,
            sizes: ['XS','S','M'],
            slug: "men_3d_small_wordmark_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Desktop Dell Optiplex 9020",
            gender: 'desktop'
        },
        {
            description: "Diseñada para los usuarios mas exigentes esta Notebook viene equipada con un procesador Intel Core i5-1235U que alcanza velocidades de hasta 4.4GHz, 8GB Soldada DDR4-3200, 256GB SSD M.2 2242 PCIe 4.0x4 NVMe, Video Integrada Intel Iris Xe Graphics, Windows 11 Home, 12 meses de garantia.",
            images: [
                'laptop_lenovo_82qd00gnus_i5_1.jpg',
                'laptop_lenovo_82qd00gnus_i5_2.jpg',
            ],
            inStock: 82,
            price: 35,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "men_plaid_mode_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Lenovo 15.6″ Ideapad 1 15IAU7",
            gender: 'laptop'
        },
        {
            description: "Inspired by our popular home battery, the Tesla Powerwall Tee is made from 100% cotton and features the phrase 'Pure Energy' under our signature logo in the back. Designed for fit, comfort and style, the exclusive tee promotes sustainable energy in any environment.",
            images: [
                '9877034-00-A_0_2000.jpg',
                '9877034-00-A_2.jpg',
            ],
            inStock: 24,
            price: 35,
            sizes: ['XL','XXL'],
            slug: "men_powerwall_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Powerwall Tee",
            gender: 'laptop'
        },
        {
            description: "Inspired by Tesla Battery Day and featuring the unveiled tabless battery cell, Battery Day Tee celebrates the future of energy storage and cell manufacturing. Designed for fit, comfort and style, Battery Day Tee is made from 100% cotton with a stylized cell printed across the chest. Made in Peru.",
            images: [
                '1633802-00-A_0_2000.jpg',
                '1633802-00-A_2.jpg',
            ],
            inStock: 5,
            price: 30,
            sizes: ['XS','S','XXL'],
            slug: "men_battery_day_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Battery Day Tee",
            gender: 'laptop'
        },
        {
            description: "Designed for exceptional comfort and inspired by the Cybertruck unveil event, the Cybertruck Bulletproof Tee is made from 100% cotton and features our signature Cybertruck icon on the back.",
            images: [
                '7654399-00-A_0_2000.jpg',
                '7654399-00-A_1.jpg',
            ],
            inStock: 150,
            price: 30,
            sizes: ['M','L'],
            slug: "men_cybertruck_bulletproof_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men’s Cybertruck Bulletproof Tee",
            gender: 'desktop'
        },
        {
            description: "Inspired by the Model Y order confirmation graphic, the limited edition Haha Yes Tee is designed for comfort and style. Made from 100% Peruvian cotton and featuring the Tesla wordmark across the chest, the exclusive tee will commemorate your order for years to come.",
            images: [
                '7652410-00-A_0.jpg',
                '7652410-00-A_1_2000.jpg',
            ],
            inStock: 10,
            price: 35,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "men_haha_yes_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Haha Yes Tee",
            gender: 'desktop'
        },
        {
            description: "Designed for fit, comfort and style, the limited edition S3XY Tee is made from 100% cotton with a 3D silicone-printed “S3XY” logo across the chest. Made in Peru. Available in black.",
            images: [
                '8764600-00-A_0_2000.jpg',
                '8764600-00-A_2.jpg',
            ],
            inStock: 34,
            price: 35,
            sizes: ['XS','S','M','L'],
            slug: "men_s3xy_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's S3XY Tee",
            gender: 'desktop'
        },
        {
            description: "Designed for fit, comfort and style, the Men's 3D Wordmark Long Sleeve Tee is made from 100% cotton and features an understated wordmark logo on the left chest.",
            images: [
                '8764813-00-A_0_2000.jpg',
                '8764813-00-A_1.jpg',
            ],
            inStock: 15,
            price: 40,
            sizes: ['XL','XXL'],
            slug: "men_3d_wordmark_long_sleeve_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's 3D Wordmark Long Sleeve Tee",
            gender: 'desktop'
        },
        {
            description: "Designed for fit, comfort and style, the Men's 3D T Logo Long Sleeve Tee is made from 100% cotton and features an understated T logo on the left chest.",
            images: [
                '8529198-00-A_0_2000.jpg',
                '8529198-00-A_1.jpg',
            ],
            inStock: 12,
            price: 40,
            sizes: ['XS','XXL'],
            slug: "men_3d_t_logo_long_sleeve_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's 3D T Logo Long Sleeve Tee",
            gender: 'desktop'
        },
        {
            description: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Hoodie has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve with a french terry interior for versatility in any season. Made from 70% bamboo and 30% cotton.",
            images: [
                '1740245-00-A_0_2000.jpg',
                '1740245-00-A_1.jpg',
            ],
            inStock: 10,
            price: 115,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "men_raven_lightweight_hoodie",
            type: 'hoodies',
            tags: ['hoodie'],
            title: "Men's Raven Lightweight Hoodie",
            gender: 'desktop'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Chill Pullover Hoodie has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The unisex hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve, a double layer single seam hood and pockets with custom matte zipper pulls. Made from 60% cotton and 40% recycled polyester.",
            images: [
                '1740051-00-A_0_2000.jpg',
                '1740051-00-A_1.jpg',
            ],
            inStock: 10,
            price: 130,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "chill_pullover_hoodie",
            type: 'hoodies',
            tags: ['hoodie'],
            title: "Chill Pullover Hoodie",
            gender: 'all-in-one'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Men's Chill Full Zip Hoodie has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and sleeve, a double layer single seam hood and pockets with custom matte zipper pulls. Made from 60% cotton and 40% recycled polyester.",
            images: [
                '1741111-00-A_0_2000.jpg',
                '1741111-00-A_1.jpg',
            ],
            inStock: 100,
            price: 85,
            sizes: ['XS','L','XL','XXL'],
            slug: "men_chill_full_zip_hoodie",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Chill Full Zip Hoodie",
            gender: 'desktop'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Quarter Zip Pullover has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The pullover features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, as well as a custom matte zipper pull. Made from 60% cotton and 40% recycled polyester.",
            images: [
                '1740140-00-A_0_2000.jpg',
                '1740140-00-A_1.jpg',
            ],
            inStock: 7,
            price: 85,
            sizes: ['XS','S','M'],
            slug: "men_chill_quarter_zip_pullover_-_gray",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Chill Quarter Zip Pullover - Gray",
            gender: 'desktop'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Quarter Zip Pullover has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The pullover features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, as well as a custom matte zipper pull. Made from 60% cotton and 40% recycled polyester.",
            images: [
                '1740145-00-A_2_2000.jpg',
                '1740145-00-A_1.jpg',
            ],
            inStock: 15,
            price: 85,
            sizes: ['XS','S','M','L'],
            slug: "men_chill_quarter_zip_pullover_-_white",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Chill Quarter Zip Pullover - White",
            gender: 'desktop'
        },
        {
            description: "The Unisex 3D Large Wordmark Pullover Hoodie features soft fleece and an adjustable, jersey-lined hood for comfort and coverage. Designed in a unisex style, the pullover hoodie includes a tone-on-tone 3D silicone-printed wordmark across the chest.",
            images: [
                '8529107-00-A_0_2000.jpg',
                '8529107-00-A_1.jpg',
            ],
            inStock: 15,
            price: 70,
            sizes: ['XS','S','XL','XXL'],
            slug: "3d_large_wordmark_pullover_hoodie",
            type: 'hoodies',
            tags: ['hoodie'],
            title: "3D Large Wordmark Pullover Hoodie",
            gender: 'all-in-one'
        },
        {
            description: "As with the iconic Tesla logo, the Cybertruck Graffiti Hoodie is a classic in the making. Unisex style featuring soft fleece and an adjustable, jersey-lined hood for comfortable coverage.",
            images: [
                '7654420-00-A_0_2000.jpg',
                '7654420-00-A_1_2000.jpg',
            ],
            inStock: 13,
            price: 60,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "cybertruck_graffiti_hoodie",
            type: 'hoodies',
            tags: ['hoodie'],
            title: "Cybertruck Graffiti Hoodie",
            gender: 'all-in-one'
        },
        {
            description: "The Relaxed T Logo Hat is a classic silhouette combined with modern details, featuring a 3D T logo and a custom metal buckle closure. The ultrasoft design is flexible and abrasion resistant, while the inner sweatband includes quilted padding for extra comfort and moisture wicking. The visor is fully made from recycled plastic bottles. 100% Cotton.",
            images: [
                '1657932-00-A_0_2000.jpg',
                '1657932-00-A_1.jpg',
            ],
            inStock: 11,
            price: 30,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "relaxed_t_logo_hat",
            type: 'hats',
            tags: ['hats'],
            title: "Relaxed T Logo Hat",
            gender: 'all-in-one'
        },
        {
            description: "The Relaxed T Logo Hat is a classic silhouette combined with modern details, featuring a 3D T logo and a custom metal buckle closure. The ultrasoft design is flexible and abrasion resistant, while the inner sweatband includes quilted padding for extra comfort and moisture wicking. The visor is fully made from recycled plastic bottles. 100% Cotton.",
            images: [
                '1740417-00-A_0_2000.jpg',
                '1740417-00-A_1.jpg',
            ],
            inStock: 13,
            price: 35,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "thermal_cuffed_beanie",
            type: 'hats',
            tags: ['hats'],
            title: "Thermal Cuffed Beanie",
            gender: 'all-in-one'
        },
        {
            description: "The Women's Cropped Puffer Jacket features a uniquely cropped silhouette for the perfect, modern style while on the go during the cozy season ahead. The puffer features subtle silicone injected Tesla logos below the back collar and on the right sleeve, custom matte metal zipper pulls and a soft, fleece lined collar. Made from 87% nylon and 13% polyurethane.",
            images: [
                '1740535-00-A_0_2000.jpg',
                '1740535-00-A_1.jpg',
            ],
            inStock: 85,
            price: 225,
            sizes: ['XS','S','M'],
            slug: "women_cropped_puffer_jacket",
            type: 'hoodies',
            tags: ['hoodie'],
            title: "Women's Cropped Puffer Jacket",
            gender: 'impresora'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Women's Chill Half Zip Cropped Hoodie has a premium, soft fleece exterior and cropped silhouette for comfort in everyday lifestyle. The hoodie features an elastic hem that gathers at the waist, subtle thermoplastic polyurethane Tesla logos along the hood and on the sleeve, a double layer single seam hood and a custom ring zipper pull. Made from 60% cotton and 40% recycled polyester.",
            images: [
                '1740226-00-A_0_2000.jpg',
                '1740226-00-A_1.jpg',
            ],
            inStock: 10,
            price: 130,
            sizes: ['XS','S','M','XXL'],
            slug: "women_chill_half_zip_cropped_hoodie",
            type: 'hoodies',
            tags: ['hoodie'],
            title: "Women's Chill Half Zip Cropped Hoodie",
            gender: 'impresora'
        },
        {
            description: "Introducing the Tesla Raven Collection. The Women's Raven Slouchy Crew Sweatshirt has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The slouchy crew features a subtle thermoplastic polyurethane Tesla wordmark on the left sleeve and a french terry interior for a cozy look and feel in every season. Pair it with your Raven Joggers or favorite on the go fit. Made from 70% bamboo and 30% cotton.",
            images: [
                '1740260-00-A_0_2000.jpg',
                '1740260-00-A_1.jpg',
            ],
            inStock: 9,
            price: 110,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "women_raven_slouchy_crew_sweatshirt",
            type: 'hoodies',
            tags: ['hoodie'],
            title: "Women's Raven Slouchy Crew Sweatshirt",
            gender: 'impresora'
        },
        {
            description: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Women's Turbine Cropped Long Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style with a cropped silhouette. Made from 50% cotton and 50%",
            images: [
                '1740290-00-A_0_2000.jpg',
                '1740290-00-A_1.jpg',
            ],
            inStock: 10,
            price: 45,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "women_turbine_cropped_long_sleeve_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Women's Turbine Cropped Long Sleeve Tee",
            gender: 'impresora'
        },
        {
            description: "ntroducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Women's Turbine Cropped Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style with a cropped silhouette. Made from 50% cotton and 50% polyester.",
            images: [
                '1741441-00-A_0_2000.jpg',
                '1741441-00-A_1.jpg',
            ],
            inStock: 0,
            price: 40,
            sizes: ['XS','S'],
            slug: "women_turbine_cropped_short_sleeve_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Women's Turbine Cropped Short Sleeve Tee",
            gender: 'impresora'
        },
        {
            description: "Designed for style and comfort, the ultrasoft Women's T Logo Short Sleeve Scoop Neck Tee features a tonal 3D silicone-printed T logo on the left chest. Made of 50% Peruvian cotton and 50% Peruvian viscose.",
            images: [
                '8765090-00-A_0_2000.jpg',
                '8765090-00-A_1.jpg',
            ],
            inStock: 30,
            price: 35,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "women_t_logo_short_sleeve_scoop_neck_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Women's T Logo Short Sleeve Scoop Neck Tee",
            gender: 'impresora'
        },
        {
            description: "Designed for style and comfort, the ultrasoft Women's T Logo Long Sleeve Scoop Neck Tee features a tonal 3D silicone-printed T logo on the left chest. Made of 50% Peruvian cotton and 50% Peruvian viscose.",
            images: [
                '8765100-00-A_0_2000.jpg',
                '8765100-00-A_1.jpg',
            ],
            inStock: 16,
            price: 40,
            sizes: ['XS','S','L','XL','XXL'],
            slug: "women_t_logo_long_sleeve_scoop_neck_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Women's T Logo Long Sleeve Scoop Neck Tee",
            gender: 'impresora'
        },
        {
            description: "Designed for style and comfort, the Women's Small Wordmark Short Sleeve V-Neck Tee features a tonal 3D silicone-printed wordmark on the left chest. Made of 100% Peruvian cotton.",
            images: [
                '8765120-00-A_0_2000.jpg',
                '8765120-00-A_1.jpg',
            ],
            inStock: 18,
            price: 35,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "women_small_wordmark_short_sleeve_v-neck_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Women's Small Wordmark Short Sleeve V-Neck Tee",
            gender: 'impresora'
        },
        {
            description: "Designed for style and comfort, the Women's Large Wordmark Short Sleeve Crew Neck Tee features a tonal 3D silicone-printed wordmark across the chest. Made of 100% Peruvian pima cotton.",
            images: [
                '8765115-00-A_0_2000.jpg',
                '8765115-00-A_1.jpg',
            ],
            inStock: 5,
            price: 35,
            sizes: ['XL','XXL'],
            slug: "women_large_wordmark_short_sleeve_crew_neck_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Women's Large Wordmark Short Sleeve Crew Neck Tee",
            gender: 'impresora'
        },
        {
            description: "Designed to celebrate Tesla's incredible performance mode, the Plaid Mode Tee features great fit, comfort and style. Made from 100% cotton, it's the next best thing to riding shotgun at the Nürburgring.",
            images: [
                '1549275-00-A_0_2000.jpg',
                '1549275-00-A_1.jpg',
            ],
            inStock: 16,
            price: 35,
            sizes: ['S','M'],
            slug: "women_plaid_mode_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Women's Plaid Mode Tee",
            gender: 'impresora'
        },
        {
            description: "Inspired by our popular home battery, the Tesla Powerwall Tee is made from 100% cotton and features the phrase 'Pure Energy' under our signature logo in the back. Designed for fit, comfort and style, the exclusive tee promotes sustainable energy in any",
            images: [
                '9877040-00-A_0_2000.jpg',
                '9877040-00-A_1.jpg',
            ],
            inStock: 10,
            price: 130,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "women_powerwall_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Women’s Powerwall Tee",
            gender: 'desktop'
        },
        {
            description: "Fully customized and uniquely styled, the Women's Corp Jacket features a silicone-printed 'T' logo on the left chest and prominent Tesla wordmark across the back.",
            images: [
                '5645680-00-A_0_2000.jpg',
                '5645680-00-A_3.jpg',
            ],
            inStock: 3,
            price: 90,
            sizes: ['M','L','XL','XXL'],
            slug: "women_corp_jacket",
            type: 'shirts',
            tags: ['shirt'],
            title: "Women's Corp Jacket",
            gender: 'desktop'
        },
        {
            description: "Introducing the Tesla Raven Collection. The Women's Raven Joggers have a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The joggers feature a subtle thermoplastic polyurethane Tesla wordmark and T logo and a french terry interior for a cozy look and feel in every season. Pair them with your Raven Slouchy Crew Sweatshirt, Raven Lightweight Zip Up Jacket or other favorite on the go fit. Made from 70% bamboo and 30% cotton.",
            images: [
                '1740270-00-A_0_2000.jpg',
                '1740270-00-A_1.jpg',
            ],
            inStock: 162,
            price: 100,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "women_raven_joggers",
            type: 'shirts',
            tags: ['shirt'],
            title: "Women's Raven Joggers",
            gender: 'desktop'
        },
        {
            description: "Designed for fit, comfort and style, the Kids Cybertruck Graffiti Long Sleeve Tee features a water-based Cybertruck graffiti wordmark across the chest, a Tesla wordmark down the left arm and our signature T logo on the back collar. Made from 50% cotton and 50% polyester.",
            images: [
                '1742694-00-A_1_2000.jpg',
                '1742694-00-A_3.jpg',
            ],
            inStock: 10,
            price: 30,
            sizes: ['XS','S','M'],
            slug: "kids_cybertruck_long_sleeve_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Kids Cybertruck Long Sleeve Tee",
            gender: 'desktop'
        },
        {
            description: "The Kids Scribble T Logo Tee is made from 100% Peruvian cotton and features a Tesla T sketched logo for every young artist to wear.",
            images: [
                '8529312-00-A_0_2000.jpg',
                '8529312-00-A_1.jpg',
            ],
            inStock: 0,
            price: 25,
            sizes: ['XS','S','M'],
            slug: "kids_scribble_t_logo_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Kids Scribble T Logo Tee",
            gender: 'desktop'
        },
        {
            description: "The Kids Cybertruck Tee features the iconic Cybertruck graffiti wordmark and is made from 100% Peruvian cotton for maximum comfort.",
            images: [
                '8529342-00-A_0_2000.jpg',
                '8529342-00-A_1.jpg',
            ],
            inStock: 10,
            price: 25,
            sizes: ['XS','S','M'],
            slug: "kids_cybertruck_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Kids Cybertruck Tee",
            gender: 'desktop'
        },
        {
            description: "The refreshed Kids Racing Stripe Tee is made from 100% Peruvian cotton, featuring a newly enhanced racing stripe with a brushed Tesla wordmark that's perfect for any speed racer.",
            images: [
                '8529354-00-A_0_2000.jpg',
                '8529354-00-A_1.jpg',
            ],
            inStock: 10,
            price: 30,
            sizes: ['XS','S','M'],
            slug: "kids_racing_stripe_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Kids Racing Stripe Tee",
            gender: 'desktop'
        },
        {
            description: "Designed for fit, comfort and style, the Tesla T Logo Tee is made from 100% Peruvian cotton and features a silicone-printed T Logo on the left chest.",
            images: [
                '7652465-00-A_0_2000.jpg',
                '7652465-00-A_1.jpg',
            ],
            inStock: 10,
            price: 30,
            sizes: ['XS','S','M'],
            slug: "kids_3d_t_logo_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Kids 3D T Logo Tee",
            gender: 'desktop'
        },
        {
            description: "The checkered tee is made from long grain, GMO free Peruvian cotton. Peru is the only country in the world where cotton is picked by hand on a large scale. The 4,500-year-old tradition prevents damage to the fiber during the picking process and removes the need to use chemicals to open the cotton plants before harvest. This environmentally friendly process results in cotton that is soft, strong, and lustrous – and the tee will get even softer with every wash.",
            images: [
                '100042307_0_2000.jpg',
                '100042307_alt_2000.jpg',
            ],
            inStock: 10,
            price: 30,
            sizes: ['XS','S','M'],
            slug: "kids_checkered_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Kids Checkered Tee",
            gender: 'desktop'
        },
        {
            description: "For the future space traveler with discerning taste, a soft, cotton onesie with snap closure bottom. Clear labeling provided in case of contact with a new spacefaring civilization. 100% Cotton. Made in Peru",
            images: [
                '1473809-00-A_1_2000.jpg',
                '1473809-00-A_alt.jpg',
            ],
            inStock: 16,
            price: 25,
            sizes: ['XS','S'],
            slug: "made_on_earth_by_humans_onesie",
            type: 'shirts',
            tags: ['shirt'],
            title: "Made on Earth by Humans Onesie",
            gender: 'desktop'
        },
        {
            description: "The Kids Scribble T Logo Onesie is made from 100% Peruvian cotton and features a Tesla T sketched logo for every little artist to wear.",
            images: [
                '8529387-00-A_0_2000.jpg',
                '8529387-00-A_1.jpg',
            ],
            inStock: 0,
            price: 30,
            sizes: ['XS','S'],
            slug: "scribble_t_logo_onesie",
            type: 'shirts',
            tags: ['shirt'],
            title: "Scribble T Logo Onesie",
            gender: 'desktop'
        },
        {
            description: "Show your commitment to sustainable energy with this cheeky onesie for your young one. Note: Does not prevent emissions. 100% Cotton. Made in Peru.",
            images: [
                '1473834-00-A_2_2000.jpg',
                '1473829-00-A_2_2000.jpg',
            ],
            inStock: 10,
            price: 30,
            sizes: ['XS','S'],
            slug: "zero_emissions_(almost)_onesie",
            type: 'shirts',
            tags: ['shirt'],
            title: "Zero Emissions (Almost) Onesie",
            gender: 'desktop'
        },
        {
            description: "Wear your Kids Cyberquad Bomber Jacket during your adventures on Cyberquad for Kids. The bomber jacket features a graffiti-style illustration of our Cyberquad silhouette and wordmark. With three zippered pockets and our signature T logo and Tesla wordmark printed along the sleeves, Kids Cyberquad Bomber Jacket is perfect for wherever the trail takes you. Made from 60% cotton and 40% polyester.",
            images: [
                '1742702-00-A_0_2000.jpg',
                '1742702-00-A_1.jpg',
            ],
            inStock: 10,
            price: 65,
            sizes: ['XS','S','M'],
            slug: "kids_cyberquad_bomber_jacket",
            type: 'shirts',
            tags: ['shirt'],
            title: "Kids Cyberquad Bomber Jacket",
            gender: 'laptop'
        },
        {
            description: "Cruise the playground in style with the Kids Corp Jacket. Modeled after the original Tesla Corp Jacket, the Kids Corp Jacket features the same understated style and high-quality materials but at a pint-sized scale.",
            images: [
                '1506211-00-A_0_2000.jpg',
                '1506211-00-A_1_2000.jpg',
            ],
            inStock: 10,
            price: 30,
            sizes: ['XS','S','M'],
            slug: "kids_corp_jacket",
            type: 'shirts',
            tags: ['shirt'],
            title: "Kids Corp Jacket",
            gender: 'impresora'
        },
    ]
}