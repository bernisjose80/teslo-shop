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
    gender: 'desktop'|'laptop'|'monitor'|'impresora'|'otros'
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
                'dell_latitude_3300_3.jpg',
                'dell_latitude 3300_4.jpg',                
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
                'laptop_82xboolus_2.jpg',
                'laptop_82xboolus_1.jpg',
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
                'dell_inspiron_15_3520_1.jpg',
                'dell_inspiron_15_3520_2.jpg',
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
                'all_in_one_L3n90AV_3.jpg',
                'all_in_one_L3n90AV_4.jpg',
            ],
            inStock: 17,
            price: 320,
            sizes: ['XS','S','XL','XXL'],
            slug: "men_let_the_sun_shine_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "HP L3N90AV 23 All in One 800 G2",
            gender: 'laptop'
        },
        {
            description: "Con factor de forma reducido este computador le permite ocupar menos espacio y su combinacion de rendimiento es la combinacion perfecta entre un buen diseño y alta productividad. Equipado con un procesador Intel de 7ma generacion I5 con memorias ddr4 de 8gb y disco de duro de la mas nueva tecnologia SSD viene a ser ideal para desplegar las aplicaciones de ofimatica y sistemas CRM en tu negocio o pequeña empresa. Asi mismo llega a obtener un plus en su procesamiento de tareas por la condicion de frecuencia turbo boost llegando alcanzar hasta 3.50 Ghz. Garantia 90 dias",
            images: [
                'I5_Y3A10AV_1.jpg',
                'I5_Y3A10AV_2.jpg',
            ],
            inStock: 12,
            price: 200,
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
            price: 250,
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
            price: 160,
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
            price: 590,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "men_plaid_mode_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Lenovo 15.6″ Ideapad 1 15IAU7",
            gender: 'laptop'
        },
        {
            description: "Ensamblados en nuestras instalaciones esta configuracion de Desktop reune las caracteristicas para un usuario que exige un buen perfomance combinada con un presupuesto accesible. Cuenta con procesador de la marca Intel linea I3 de 11va generacion, Tarjeta Madre chip intel H510M, Memoria Ram 8gb DDR4, Disco duro de 256gb SSD y un Case con fuente de 600w. Partes y piezas totalmente nuevas que en conjunto con un sistema operativo Windows 11 te va permitir instalar las aplicaciones exigentes que en tus labores diarias requieres para realizar un trabajo altamente productivo. Garantia 6 meses",
            images: [
                'desktop i3 clon.jpg',
                'logo i3.jpg',
            ],
            inStock: 24,
            price: 270,
            sizes: ['XL','XXL'],
            slug: "men_powerwall_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Desktop Intel I3 11va Gen Nuevo",
            gender: 'desktop'
        },
        {
            description: "Ensamblados en nuestras instalaciones esta configuracion de Desktop reune las caracteristicas para un usuario que necesita un alto perfomance. Cuenta con procesador de la marca Intel I5 de 11va generacion, Tarjeta Madre chip intel H510M, Memoria Ram 8gb DDR4, Disco duro de 256gb SSD y un Case con fuente de 600w. Partes y piezas totalmente nuevas que en conjunto con un sistema operativo Windows 11 te va permitir instalar las aplicaciones exigentes que en tus labores diarias requieres para realizar un trabajo altamente productivo. Garantia 6 meses",
            images: [
                'desktop i5 clon.jpg',
                'logo i5.jpg',
            ],
            inStock: 5,
            price: 290,
            sizes: ['XS','S','XXL'],
            slug: "men_battery_day_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Desktop Intel I5 11va Gen Nuevo",
            gender: 'desktop'
        },
        {
            description: "Ensamblados en nuestras instalaciones esta configuracion de Desktop reune las caracteristicas para un usuario que necesita un alto perfomance.Ideal para aplicaciones de diseño gráfico. Cuenta con procesador de la marca Intel I7 de 11va generacion, Tarjeta Madre chip intel H510M, Memoria Ram 8gb DDR4, Disco duro de 256gb SSD y un Case con fuente de 600w. Partes y piezas totalmente nuevas que en conjunto con un sistema operativo Windows 11 te va permitir instalar las aplicaciones exigentes que en tus labores diarias requieres para realizar un trabajo altamente productivo. Garantia 6 meses",
            images: [
                'desktop i7 clon.jpg',
                'logo i7.jpg',
            ],
            inStock: 150,
            price: 325,
            sizes: ['M','L'],
            slug: "men_cybertruck_bulletproof_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Desktop Intel I7 11va Gen Nuevo",
            gender: 'desktop'
        },
        {
            description: "La nueva impresora multifuncional PIXMA G4110 proporciona la capacidad de imprimir, copiar, escanear y enviar fax. Asimismo, tiene un alimentador automático de documentos de 20 hojas y una pantalla LCD de 2 líneas. Esta impresora proporciona muchas de las funciones populares que se encuentran en los modelos anteriores tal como el sistema de tinta híbrido integrado, diseño compacto y capacidades de impresión sin bordes.",
            images: [
                'CANON 4110_2.jpg',
                'CANON 4110.jpg',
            ],
            inStock: 10,
            price: 350,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "men_haha_yes_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Multifuncional Canon G4110 Tinta Continua",
            gender: 'impresora'
        },
        {
            description: "La impresora multifuncional Canon MF3010vp proporciona la capacidad de imprimir, copiar, escanear.Esta impresora proporciona todas las funciones ideales para estar en una oficina. Es de impresion rapida y de alta eficiencia energetica. Una de sus fortalezas es que el toner es altamente rendidor y economico.Llegando a imprimir hasta 1800 paginas por cartucho de toner. A pesar de que su impresion es solo monocromatica imprime con gran nitidez los graficos. Cuenta con la garantia Canon de 12 meses.",
            images: [
                'canon mf3010vp.jpg',
                'canon mf3010vp_2.jpg',
            ],
            inStock: 34,
            price: 220,
            sizes: ['XS','S','M','L'],
            slug: "men_s3xy_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Multifuncional Canon MF3010vp Laser",
            gender: 'impresora'
        },
        {
            description: "La Impresora inalámbrica 1250 económica para familias y estudiantes. Ofrece costos de impresión ultrabajos gracias al sistema EcoTank de Epson que imprime 4.500 páginas a blanco y negro ó 7.500 páginas a color por cada juego de botellas de repuesto. Diseñada para integrarse en su estilo de vida, está totalmente conectada con Wi-Fi, Wi-Fi Direct, y ofrece funciones de impresión móvil y copia/escaneo con cámara a través de la nueva aplicación Epson Smart Panel, además de ser compatible con la operación por voz a través de Alexa.",
            images: [
                'epson l1250.jpg',
                'epson l1250_2.jpg',
            ],
            inStock: 15,
            price: 240,
            sizes: ['XL','XXL'],
            slug: "men_3d_wordmark_long_sleeve_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Impresora Epson L1250 Tinta Continua",
            gender: 'impresora'
        },
        {
            description: "La Impresora multifuncional 3 en 1 Epson EcoTank L3251 ofrece a las familias, estudiantes y profesionales un costo de impresión ultra bajo, que te permite imprimir hasta 4.500 páginas en negro o 7.500 páginas a color con cada juego de botellas de repuesto. La EcoTank L3251 ofrece total confiabilidad gracias a la tecnología Heat-Free de Epson, además de una experiencia de recarga fácil, limpia y sin errores con la tecnología EcoFitTM. Diseñado para integrarse en su estilo de vida, está completamente conectado con WiFi, WiFi Direct® y capacidades de impresión móvil a través de la nueva e intuitiva aplicación Epson Smart Panel y cuenta con un diseño de tanque frontal súper compacto que ocupa poco espacio y permite verificar fácilmente los niveles de tinta. ",
            images: [
                'epson_l3251.jpg',
                'epson_l3251_2.jpg',
            ],
            inStock: 12,
            price: 300,
            sizes: ['XS','XXL'],
            slug: "men_3d_t_logo_long_sleeve_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Multifuncional Epson L3251 Tinta Continua",
            gender: 'impresora'
        },
        {
            description: "La Canon LBP6030w es una impresora láser monocromática inalámbrica, ideal para uso doméstico y pequeñas oficinas. Ofrece impresión rápida y eficiente con conectividad Wi-Fi para imprimir desde dispositivos móviles. Su diseño compacto y bajo consumo energético la hacen una opción atractiva para espacios reducidos y para ahorrar costos. Ofrece velocidades de impresión de hasta 19 páginas por minuto. Tiene una bandeja de entrada para 150 hojas. Toner con capacidad para 1800 paginas. Garantia Canon por 12 meses",
            images: [
                'lbp6030w canon.jpg',
                'lbp6030w canon_2.jpg',
            ],
            inStock: 10,
            price: 115,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "men_raven_lightweight_hoodie",
            type: 'hoodies',
            tags: ['hoodie'],
            title: "Impresora Canon LBP6030W Laser",
            gender: 'impresora'
        },
        {
            description: "Impresora Todo-en-Uno HP Smart Tank 520 equipado con puerto 1 Hi-Speed USB 2.0, no posee capacidad inalambrica. Puede realizar copias en resoluciones de 600 x 600 ppp tanto en negro como en color. Capacidad de memoria de 64 gb. Puede imprimir en diferentes formatos de papel como: Papel común, papeles fotográficos HP, papel profesional o para folleto mate HP, papel mate presentación HP, papel profesional o para folletos brillante HP, otros papeles para inyección de tinta fotográficos, otros papeles mate para inyección de tinta, otros papeles para inyección de tinta brillante, Hagaki para inyección de tinta, papel común, grueso, papel para folleto en tríptico HP, papel común, ligero/reciclado. En cuanto a las tintas viene con 1 botella de negro y 3 de color (cyan, mangenta, yellow). Garantia HP de 12 meses",
            images: [
                'smart tank 520.jpg',
                'smart tank 520_2.jpg',
            ],
            inStock: 10,
            price: 240,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "chill_pullover_hoodie",
            type: 'hoodies',
            tags: ['hoodie'],
            title: "Impresora HP Smart Tank 520 Tinta Continua",
            gender: 'impresora'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Men's Chill Full Zip Hoodie has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and sleeve, a double layer single seam hood and pockets with custom matte zipper pulls. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'monitor_xiaomi_a27i.jpg',
                'monitor_xiaomi_a27i_2.jpg',
            ],
            inStock: 100,
            price: 85,
            sizes: ['XS','L','XL','XXL'],
            slug: "men_chill_full_zip_hoodie",
            type: 'shirts',
            tags: ['shirt'],
            title: "Monitor 27 pulg Xiaomi A27i",
            gender: 'monitor'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Quarter Zip Pullover has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The pullover features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, as well as a custom matte zipper pull. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'aon_endura_240.jpg',
                'aon_endura_240_2.jpg',
            ],
            inStock: 7,
            price: 85,
            sizes: ['XS','S','M'],
            slug: "men_chill_quarter_zip_pullover_-_gray",
            type: 'shirts',
            tags: ['shirt'],
            title: "Monitor 24 pulg AON endura 240",
            gender: 'monitor'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Quarter Zip Pullover has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The pullover features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, as well as a custom matte zipper pull. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'monitor_samsung_cf390_24.jpg',
                'monitor_samsung_cf390_24_2.jpg',
            ],
            inStock: 15,
            price: 85,
            sizes: ['XS','S','M','L'],
            slug: "men_chill_quarter_zip_pullover_-_white",
            type: 'shirts',
            tags: ['shirt'],
            title: "Monitor curvo 24 pulg Samsung CF390",
            gender: 'monitor'
        },
        {
            description: "The Unisex 3D Large Wordmark Pullover Hoodie features soft fleece and an adjustable, jersey-lined hood for comfort and coverage. Designed in a unisex style, the pullover hoodie includes a tone-on-tone 3D silicone-printed wordmark across the chest.",
            images: [
                'moitor ds-5022fn-c hikvision.jpg',
                'moitor ds-5022fn-c hikvision_2.jpg',
            ],
            inStock: 15,
            price: 70,
            sizes: ['XS','S','XL','XXL'],
            slug: "3d_large_wordmark_pullover_hoodie",
            type: 'hoodies',
            tags: ['hoodie'],
            title: "Monitor 22 pulg Hikvision DS-5022fn-c",
            gender: 'monitor'
        },
        {
            description: "Impresora multifunción láser monocromática. Entre sus funciones: Impresión, copia, escaneo y fax. Capacidad de Hasta 21 páginas por minuto con una resolución de impresión de 1200 x 1200 ppp. Conectividad por via USB, Wi-Fi, Ethernet. Capacidad de la bandeja 150 hojas. Diseñada para ofrecer impresiones rápidas y de alta calidad. Garantia HP 12 meses",
            images: [
                'impresora hp 137fnw.jpg',
                'impresora hp 137fnw_2.jpg',
            ],
            inStock: 13,
            price: 340,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "cybertruck_graffiti_hoodie",
            type: 'hoodies',
            tags: ['hoodie'],
            title: "Multifuncional HP Laserjet 137FNW",
            gender: 'impresora'
        },
        {
            description: "Con este Mini UPS garantizas al menos 5 horas de funcionamiento para tus equipos que te proporcionan la conexion a internet. Viene con salidas de 5v,9v y 12v para que conecetes tu modem ONU de fibra optica, un router y una antena POE. De esta maneras no pierdes la continuidad de tu señal para que puedas seguir ejerciendo tus labores diarias en medio de las fluctuaciones electricas.",
            images: [
                'mini ups begprod eco p18.jpg',
                'mini ups begprod eco p18_2.jpg',
            ],
            inStock: 11,
            price: 40,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "relaxed_t_logo_hat",
            type: 'hats',
            tags: ['hats'],
            title: "Mini Ups Begprod Eco P18 12000 mah",
            gender: 'otros'
        },
        {
            description: "Con este Mini UPS garantizas al menos 4 horas de funcionamiento para tus equipos que te proporcionan la conexion a internet. Viene con salidas de 5v,9v y 12v para que conecetes tu modem ONU de fibra optica, un router y una antena POE. De esta maneras no pierdes la continuidad de tu señal para que puedas seguir ejerciendo tus labores diarias en medio de las fluctuaciones electricas.",
            images: [
                'mini ups masriva.jpg',
                'mini ups masriva_2.jpg',
            ],
            inStock: 13,
            price: 35,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "thermal_cuffed_beanie",
            type: 'hats',
            tags: ['hats'],
            title: "Mini Ups Masriva KP3 10000 mah",
            gender: 'otros'
        },
        {
            description: "Ups de 4 salidas que te permite respldar tus trabajos en caso de alguna falla electrica, cuenta con una capacidad de 600 watts y una autonomia de 12 minutos aproximadamente (monitor de 18.5 y cpu).Equipado con una bateria de 12v 9A este equipo te ofrece calidad y durabilidad.",
            images: [
                'ups_begprod_1000v_9a.jpg',
                'ups_begprod_1000v_9a_2.jpg',
            ],
            inStock: 85,
            price: 65,
            sizes: ['XS','S','M'],
            slug: "women_cropped_puffer_jacket",
            type: 'hoodies',
            tags: ['hoodie'],
            title: "Ups Begprod 1000va 600w",
            gender: 'otros'
        },
        {
            description: "Ups de 6 salidas que te permite respldar tus trabajos en caso de alguna falla electrica, cuenta con una capacidad de 900 watts y una autonomia de 20 minutos aproximadamente (monitor de 18.5 y cpu).Equipado con dos bateria de 12v 7A este equipo te ofrece calidad y durabilidad",
            images: [
                'ups_begprod_1500v.jpg',
                'ups_begprod_1500v_2.jpg',
            ],
            inStock: 10,
            price: 130,
            sizes: ['XS','S','M','XXL'],
            slug: "women_chill_half_zip_cropped_hoodie",
            type: 'hoodies',
            tags: ['hoodie'],
            title: "Women's Chill Half Zip Cropped Hoodie",
            gender: 'otros'
        },
        {
            description: "Ups de 6 salidas que te permite respldar tus trabajos en caso de alguna falla electrica, cuenta con una capacidad de 1200 watts y una autonomia de 40 minutos aproximadamente (monitor de 18.5 y cpu).Equipado con dos bateria de 12v 9A este equipo te ofrece calidad y durabilidad. Ideal para la proteccion de equipos servidores de datos",
            images: [
                'ups_begprod_2000v.jpg',
                'ups_begprod_2000v_2.jpg',
            ],
            inStock: 9,
            price: 150,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "women_raven_slouchy_crew_sweatshirt",
            type: 'hoodies',
            tags: ['hoodie'],
            title: "Women's Raven Slouchy Crew Sweatshirt",
            gender: 'otros'
        },
        {
            description: "Diseñada con los mejores componenetes esta bateria es el sustituto ideal para el reemplazo de tu bateria de Ups.Durabilidad garantizada, se adapta a dieferentes marcas de UPS",
            images: [
                'bateria_mca_12v_4.jpg',
                'bateria_mca_12v_4_2.jpg',
            ],
            inStock: 10,
            price: 20,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "women_turbine_cropped_long_sleeve_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Bateria para UPS 12v 4ah MCA",
            gender: 'otros'
        },
        {
            description: "Diseñada con los mejores componenetes esta bateria es el sustituto ideal para el reemplazo de tu bateria de Ups.Durabilidad garantizada, se adapta a dieferentes marcas de UPS",
            images: [
                'bateria_mca_12v_7.jpg',
                'bateria_mca_12v_7_2.jpg',
            ],
            inStock: 0,
            price: 25,
            sizes: ['XS','S'],
            slug: "women_turbine_cropped_short_sleeve_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Bateria para UPS 12v 7ah MCA",
            gender: 'otros'
        },
        {
            description: "Diseñada con los mejores componenetes esta bateria es el sustituto ideal para el reemplazo de tu bateria de Ups.Durabilidad garantizada, se adapta a dieferentes marcas de UPS",
            images: [
                'bateria_12v_9ah_1.jpg',
                'bateria_12v_9ah_2.jpg',
            ],
            inStock: 30,
            price: 30,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "women_t_logo_short_sleeve_scoop_neck_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Bateria para UPS 12v 9ah MCA",
            gender: 'otros'
        },
        {
            description: "Diseñada con los mejores componenetes esta bateria es el sustituto ideal para el reemplazo de tu bateria de Ups.Durabilidad garantizada, se adapta a dieferentes marcas de UPS",
            images: [
                'bateria_power_sonic_ps1280_1.jpg',
                'bateria_power_sonic_ps1280_2.jpg',
            ],
            inStock: 16,
            price: 40,
            sizes: ['XS','S','L','XL','XXL'],
            slug: "women_t_logo_long_sleeve_scoop_neck_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Bateria para UPS 12v 18ah Power Sonic",
            gender: 'otros'
        },
        {
            description: "Tinta original Epson compatibles con L3150, L5190, L1110, L3110, L3251, L3210, L1210, L3250 y L5290. Equipada con una boquilla que hace la recarga de la tinta mas rapida y efectiva",
            images: [
                'tinta_epson_544_1.jpg',
                'tinta_epson_544_2.jpg',
            ],
            inStock: 18,
            price: 15,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "women_small_wordmark_short_sleeve_v-neck_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Tinta Epson Original 544",
            gender: 'otros'
        },
        {
            description: "Tinta original HP compatibles con Smart Tank 500; Smart Tank 508; Smart Tank 510; Smart Tank 511; Smart Tank 513; Smart Tank 514; Smart Tank 515; Smart Tank 517; Smart Tank 518; Smart Tank 519. Equipada con una boquilla que hace la recarga de la tinta mas rapida y efectiva.",
            images: [
                'tinta_hp_gt_52_53.jpg',
                'tinta_hp_gt_52_53_2.jpg',
            ],
            inStock: 5,
            price: 15,
            sizes: ['XL','XXL'],
            slug: "women_large_wordmark_short_sleeve_crew_neck_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Tinta HP original GT52 GT53",
            gender: 'otros'
        },
        {
            description: "Designed to celebrate Tesla's incredible performance mode, the Plaid Mode Tee features great fit, comfort and style. Made from 100% cotton, it's the next best thing to riding shotgun at the Nürburgring.",
            images: [
                'ac_1200_decco_m4_two.jpg',
                'ac_1200_decco_m4_two_2.jpg',
            ],
            inStock: 16,
            price: 35,
            sizes: ['S','M'],
            slug: "women_plaid_mode_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Router Tp Link Decco M4 Two Pack",
            gender: 'otros'
        },
        {
            description: "Inspired by our popular home battery, the Tesla Powerwall Tee is made from 100% cotton and features the phrase 'Pure Energy' under our signature logo in the back. Designed for fit, comfort and style, the exclusive tee promotes sustainable energy in any",
            images: [
                'ac_1200_decco_m5_tree.jpg',
                'ac_1200_decco_m5_tree_2.jpg',
            ],
            inStock: 10,
            price: 130,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "women_powerwall_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Router Tp Link Decco M4 Three Pack",
            gender: 'otros'
        },
        {
            description: "Fully customized and uniquely styled, the Women's Corp Jacket features a silicone-printed 'T' logo on the left chest and prominent Tesla wordmark across the back.",
            images: [
                'extensor_re450_tp_link.jpg',
                'extensor_re450_tp_link_2.jpg',
            ],
            inStock: 3,
            price: 90,
            sizes: ['M','L','XL','XXL'],
            slug: "women_corp_jacket",
            type: 'shirts',
            tags: ['shirt'],
            title: "Extensor Wifi RE450 Tp Link",
            gender: 'otros'
        },
        {
            description: "Introducing the Tesla Raven Collection. The Women's Raven Joggers have a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The joggers feature a subtle thermoplastic polyurethane Tesla wordmark and T logo and a french terry interior for a cozy look and feel in every season. Pair them with your Raven Slouchy Crew Sweatshirt, Raven Lightweight Zip Up Jacket or other favorite on the go fit. Made from 70% bamboo and 30% cotton.",
            images: [
                'audifono_logitech_h390.jpg',
                'audifono_logitech_h390_2.jpg',
            ],
            inStock: 162,
            price: 100,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "women_raven_joggers",
            type: 'shirts',
            tags: ['shirt'],
            title: "Audifonos Logitech H390",
            gender: 'otros'
        },
        {
            description: "Designed for fit, comfort and style, the Kids Cybertruck Graffiti Long Sleeve Tee features a water-based Cybertruck graffiti wordmark across the chest, a Tesla wordmark down the left arm and our signature T logo on the back collar. Made from 50% cotton and 50% polyester.",
            images: [
                'barra_genius_100.jpg',
                'barra_genius_100_2.jpg',
            ],
            inStock: 10,
            price: 30,
            sizes: ['XS','S','M'],
            slug: "kids_cybertruck_long_sleeve_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Barra de sonido para Pc Genius 100",
            gender: 'otros'
        },
        {
            description: "The Kids Scribble T Logo Tee is made from 100% Peruvian cotton and features a Tesla T sketched logo for every young artist to wear.",
            images: [
                'fuente_nexcom_650w.jpg',
                'fuente_nexcom_650w_2.jpg',
            ],
            inStock: 0,
            price: 25,
            sizes: ['XS','S','M'],
            slug: "kids_scribble_t_logo_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Fuente de Poder 600w Nexcom",
            gender: 'otros'
        },
        {
            description: "The Kids Cybertruck Tee features the iconic Cybertruck graffiti wordmark and is made from 100% Peruvian cotton for maximum comfort.",
            images: [
                'regulador_cdp_avr_1008.jpg',
                'regulador_cdp_avr_1008_2.jpg',
            ],
            inStock: 10,
            price: 25,
            sizes: ['XS','S','M'],
            slug: "kids_cybertruck_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Regulador de Poder Cdp AVR 1008",
            gender: 'otros'
        },
        {
            description: "The refreshed Kids Racing Stripe Tee is made from 100% Peruvian cotton, featuring a newly enhanced racing stripe with a brushed Tesla wordmark that's perfect for any speed racer.",
            images: [
                'regulador_cdp_avr_1808.jpg',
                'regulador_cdp_avr_1808_2.jpg',
            ],
            inStock: 10,
            price: 30,
            sizes: ['XS','S','M'],
            slug: "kids_racing_stripe_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Regulador de Poder Cdp AVR 1808",
            gender: 'otros'
        },
        {
            description: "Designed for fit, comfort and style, the Tesla T Logo Tee is made from 100% Peruvian cotton and features a silicone-printed T Logo on the left chest.",
            images: [
                'tablet_amazon_fire_hd_8.jpg',
                'tablet_amazon_fire_hd_8_2.jpg',
            ],
            inStock: 10,
            price: 30,
            sizes: ['XS','S','M'],
            slug: "kids_3d_t_logo_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Tablet Amazon Fire HD 8",
            gender: 'otros'
        },                
        {
            description: "For the future space traveler with discerning taste, a soft, cotton onesie with snap closure bottom. Clear labeling provided in case of contact with a new spacefaring civilization. 100% Cotton. Made in Peru",
            images: [
                'disco_portable_seagate_2tb.jpg',
                'disco_portable_seagate_2tb_2.jpg',
            ],
            inStock: 16,
            price: 25,
            sizes: ['XS','S'],
            slug: "made_on_earth_by_humans_onesie",
            type: 'shirts',
            tags: ['shirt'],
            title: "Disco Duro Portable 2TB Seagate",
            gender: 'otros'
        },
        {
            description: "The Kids Scribble T Logo Onesie is made from 100% Peruvian cotton and features a Tesla T sketched logo for every little artist to wear.",
            images: [
                'disco_portable_toshiba_1tb.jpg',
                'disco_portable_toshiba_1tb_2.jpg',
            ],
            inStock: 0,
            price: 30,
            sizes: ['XS','S'],
            slug: "scribble_t_logo_onesie",
            type: 'shirts',
            tags: ['shirt'],
            title: "Disco Portable 1TB Toshiba Canvio",
            gender: 'otros'
        },
        {
            description: "Show your commitment to sustainable energy with this cheeky onesie for your young one. Note: Does not prevent emissions. 100% Cotton. Made in Peru.",
            images: [
                'camara_genius_1000x_1.jpg',
                'camara_genius_1000x_2.jpg',
            ],
            inStock: 10,
            price: 30,
            sizes: ['XS','S'],
            slug: "zero_emissions_(almost)_onesie",
            type: 'shirts',
            tags: ['shirt'],
            title: "WebCam Genius Face 1000x",
            gender: 'otros'
        },
        {
            description: "Wear your Kids Cyberquad Bomber Jacket during your adventures on Cyberquad for Kids. The bomber jacket features a graffiti-style illustration of our Cyberquad silhouette and wordmark. With three zippered pockets and our signature T logo and Tesla wordmark printed along the sleeves, Kids Cyberquad Bomber Jacket is perfect for wherever the trail takes you. Made from 60% cotton and 40% polyester.",
            images: [
                'combo_logitech_mk235.jpg',
                'combo_logitech_mk235_1.jpg',
            ],
            inStock: 10,
            price: 65,
            sizes: ['XS','S','M'],
            slug: "kids_cyberquad_bomber_jacket",
            type: 'shirts',
            tags: ['shirt'],
            title: "Teclado Mouse Logitech Inalambrico Mk235",
            gender: 'otros'
        },
        {
            description: "Cruise the playground in style with the Kids Corp Jacket. Modeled after the original Tesla Corp Jacket, the Kids Corp Jacket features the same understated style and high-quality materials but at a pint-sized scale.",
            images: [
                'disco_ssd_crucial_960.jpg',
                'disco_ssd_crucial_960_2.jpg',
            ],
            inStock: 10,
            price: 30,
            sizes: ['XS','S','M'],
            slug: "kids_corp_jacket",
            type: 'shirts',
            tags: ['shirt'],
            title: "Disco Duro 960gb SSD Crucial",
            gender: 'otros'
        },
        {
            description: "Cruise the playground in style with the Kids Corp Jacket. Modeled after the original Tesla Corp Jacket, the Kids Corp Jacket features the same understated style and high-quality materials but at a pint-sized scale.",
            images: [
                'memoria_32gb_ddr4_jemip.jpg',
                'memoria_32gb_ddr4_jemip_2.jpg',
            ],
            inStock: 10,
            price: 30,
            sizes: ['XS','S','M'],
            slug: "memoria_32gb_jemip",
            type: 'shirts',
            tags: ['shirt'],
            title: "Memoria ram DDR4 32 GB para Pc",
            gender: 'otros'
        },
        {
            description: "Cruise the playground in style with the Kids Corp Jacket. Modeled after the original Tesla Corp Jacket, the Kids Corp Jacket features the same understated style and high-quality materials but at a pint-sized scale.",
            images: [
                'mouse_logitech_m170.jpg',
                'mouse_logitech_m170_2.jpg',
            ],
            inStock: 10,
            price: 30,
            sizes: ['XS','S','M'],
            slug: "mouse_logitech_m170",
            type: 'shirts',
            tags: ['shirt'],
            title: "Mouse Logitech M170 Inalambrico",
            gender: 'otros'
        },
    ]
}