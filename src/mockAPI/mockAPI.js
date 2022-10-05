const products = [
    {
        id: "tarjeta-grafica-rtx-3080-aorus",
        img: "https://hardzone.es/app/uploads-hardzone.es/2022/01/GIGABYTE-RTX-3080-12-GB-1.jpg",
        title: "Tarjeta grafica RTX 3080 AORUS",
        price: 1560,
        stock: 8,
        description: "Tarjeta de Video AOURUS RTX3080TI  -  XC3 Ultra 12GB  -  GDDR6X 384bit -  Bus de Memoria 384bit  -  Reloj de Memoria 19000MHz  -   Ancho de Banda de Memoria 912GB/s  -   CUDA Cores 10240Interfaz   -  PCIe 4.0 Conectores HDMI, 3x DisplayPort DirectX 12 UltimateOpenGL 4.6",
        category: "gpu",
    },
    {
        id: "tarjeta-grafica-rtx-3070-asus",
        img: "https://dlcdnwebimgs.asus.com/gain/1a73a003-af3b-41f8-b197-5d7f8c7e503b/",
        title: "Tarjeta grafica RTX 3070 ASUS",
        price: 1300,
        stock: 2,
        description: "GPU ASUS NVIDIA GeForce RTX 3070  -  Interface: PCI Express Gen 4 x16  -  Nucleos CUDA 5888 Units  -  Clock de nucleos 1845 MHz  -  Velocidad de memoria 14Gbps  -  Memoria 8GB GDDR6  -  Bus de memoria 256-bit  -  Conectores 8-pin x 2  -  Fuente recomendada 750 W  -  Dimensiones 29.99 x 14x 5.34cm  -  Puertos disponibles - 3 x DisplayPort 1.4a hasta 7680x4320 a 60Hz - 2 x HDMI 2.1 Soporta 4K 120Hz HDR, 8K 60Hz HDR",
        category: "gpu",
    },
    {
        id: "procesador-9gen-7900-intel",
        img: "https://thotcomputacion.com.uy/wp-content/uploads/2021/06/97900x6697_c4c0afef8d9a45b88fc67e014b0f97ca.jpg",
        title: "Procesador 9gen 7900 Intel",
        price: 990,
        stock: 8,
        description: "Procesador gamer Intel Core i9-7900X BX80673I97900X de 10 núcleos y 3.3GHz de frecuencia",
        category: "cpu",
    },
    {
        id: "procesador-ryzen-7-3700-marca-amd",
        img: "https://static-geektopia.com/storage/t/i/663/66376/c7b257d8c0ccc6828227c66e8.webp",
        title: "Procesador Ryzen 7 3700 marca AMD",
        price: 850,
        stock: 9,
        description: "Procesador AMD Ryzen 7 3700X - 8 cores - 4400Mhz  -  Socket AM4",
        category: "cpu",
    },
    {
        id: "monitor-144hz-marca-asus",
        img: "https://thotcomputacion.com.uy/wp-content/uploads/2022/06/3153_1_596e489d69f24246890787966100f846.jpg",
        title: "Monitor 144Hz marca ASUS",
        price: 450,
        stock: 5,
        description: "Pantalla: 34 Full HD (1920 x 1080 px) IPS 144 Hz  -  Relación de aspecto:16:9  -  Píxeles por pulgada (ppi): 81 pp  -  Brillo máximo: 400 cd/m 2  -  Relación de contraste: 1000:1  -  Relación de contraste dinámico: 100.000.000:1  -  Tecnología de actualización variable: FreeSync  -  Profundidad de bits/Soporte de color: 8 bits (16,7 millones de colores)  -  Tiempo de respuesta: 3 ms (GtG) - 1 ms (MPRT)  -  Ángulo de visión (H x V): 178x178°  -  Puertos: HDMI 1.4, DisplayPort 1.2, DVI-D, Entrada 3,5 mm-  Altavoces incorporados: 2 x 2W",
        
        category: "monitores",
    },
    {
        id: "monitor-60hz-marca-dell",
        img: "https://systemc.com.ar/wp-content/uploads/2021/07/monitor-dell-27.jpg",
        title: "Monitor 60Hz marca Dell",
        price: 300,
        stock: 7,
        description: "Una experiencia visual de calidad. Este monitor de 24 pulgadas te va a resultar cómodo para estudiar, trabajar o ver una película en tus tiempos de ocio. Asimismo, su resolución de 1920 x 1080 te permite disfrutar de momentos únicos gracias a una imagen de alta fidelidad. Una de sus virtudes es que posee pantalla antirreflejo, de esta manera no verás reflejado lo que está detrás de vos y vas a evitar forzar tu vista para enfocar el contenido.",
        category: "monitores",
    },
    {
        id: "mouse-gamer-marca-razer-naga-pro",
        img: "https://i.ytimg.com/vi/OCHn6wgDH8M/maxresdefault.jpg",
        title: "Mouse Gamer marca Razer Naga Pro",
        price: 200,
        stock: 6,
        description: "Sensor óptico Focus+ de 20 K DPI: ofrece un ajuste de sensibilidad sobre la marcha a través de botones DPI dedicados (reprogramables) para juegos.  -  Hasta 19 botones programables: permite reasignar botones y asignar funciones macro complejas a través de Razer Synapse.  -  Perfiles de color Chroma RGB personalizables: admite 16,8 millones de combinaciones de colores con perfiles predefinidos incluidos.",
        category: "mouses",
    },
    {
        id: "mouse-gamer-marca-alienware32om",
        img: "https://cdn.shopify.com/s/files/1/1780/7915/files/mouse-alienware-aw320m-black-gallery-from-tpstech.in-main-banner.jpg?v=1659505390",
        title: "Mouse Gamer marca Alienware32OM",
        price: 150,
        stock: 9,
        description: "Aumenta el ritmo con 19 000 PPP nativos, un seguimiento de hasta 400 pulgadas por segundo y sensores capaces de soportar una aceleración máxima de 50 G.i Además, disfruta de una mayor precisión y mantén el juego sin interrupciones con las nítidas y táctiles teclas L/R, construidas para soportar 60 millones de clics.  -  Dimensiones y peso: 1. Altura: 38 mm (1,5 pulg.)  -  Anchura: 62,4 mm 2,46 pulg.  -  Profundidad: 125 mm 4,9 pulg.  -  Peso mínimo: 74 gramos 0,16 libras  -  Longitud del cable: 2 metros 6,5 pies",
        category: "mouses",
    },
    {
        id: "teclado-gamer-marca-corsair-k95-rgb-platinum",
        img:"https://www.evosmo.com/wp-content/uploads/2021/06/34773-1_230817170416.jpg",
        title:"Teclado Gamer marca Corsair k95 rgb platinum",
        price: 380,
        stock: 4,
        description: "Teclado mecánico para juegos corsair k95 rgb platinum - 6 teclas macro programables - paso a través del usb y controles de medios - táctil y silencioso - cherry mx brown - retroiluminación led rgb  -  Marco de aluminio cepillado anodizado de grado aeronáutico: construido para soportar toda una vida de juegos, ligero y resistente, necesario para un teclado que verá mucha acción  -  Almacenamiento de perfil de 8mb con macro de hardware y reproducción de iluminación: permita el acceso a hasta tres perfiles almacenados sobre la marcha, independientemente del software externo.  - Posee 100 interruptores mecánicos cherry mx brown rgb porcentuales: retroalimentación táctil ligera para un rendimiento rápido y sincronización precisa con menos distracción.  -  Tambien posee 6 teclas de teclas g programables para macros en el juego: asigne pulsaciones de teclas individuales o combos complejos de teclas múltiples a cualquiera de las 6 macros dedicadas",
        category: "teclados",
    },
    {
        id: "teclado-gamer-marca-blackwidow-pro",
        img:"https://assets2.razerzone.com/images/og-image/razer-blackwidow-v3-1200x630-og.jpg",
        title:"Teclado Gamer marca Blackwidow pro",
        price: 200,
        stock: 7,
        description: "Hablar de Razer dentro del mundo gamer es palabra mayor. Esta compañía ofrece productos de muy alta calidad a sus usuarios. Su línea de teclados es reconocida por haber recibido distintos galardones y premios internacionales por su alto desempeño.  -  Distinción a todo color  -  Su retroiluminación le da un toque diferente a tu equipo y resalta su composición cuando es utilizado en espacios poco iluminados.  -  Tecnología antighosting  -  Este dispositivo tiene teclas antighosting. Esta cualidad es indispensable si requerís de un uso intensivo del periférico. Gracias a esto podrás evitar fallas al tocar varias teclas al mismo tiempo.",
        category: "teclados",
    },
    {
        id: "silla-gamer-marca-dxracer",
        img:"https://febo.com.uy/wp-content/uploads/2019/09/604323-MLU32031523475_082019-O.jpg",
        title:"Silla gamer marca DXRacer",
        price: 400,
        stock: 0,
        description: "Marca DXRacer   -   Con altura regulable   -   Con respaldo reclinable   -    Es ergonómica    -   Con apoyabrazos ajustable   -   Es giratoria",
        category: "sillas-gamer",
    },
    {
        id: "silla-gamer-marca-cougar",
        img: "https://http2.mlstatic.com/D_NQ_NP_658808-MLU44972838043_022021-O.jpg",
        title:"Silla Gamer marca Cougar",
        price: "350",
        stock: 5,
        description: "Marca Cougar   -   Con altura regulable   -   Con respaldo reclinable   -    Es ergonómica    -   Con apoyabrazos ajustable   -   Es giratoria",
        category: "sillas-gamer",
    },
];

export const menuItems = [
    { id:'monitores', name:"Monitores 📺" },
    { id:'mouses', name:"Mouses 🖱" },
    { id:'teclados', name:"Teclados ⌨" },
    { id:'cpu', name:"CPU 🧠" },
    { id:'gpu', name:"GPU 🟣" },
    { id:'sillas-gamer', name:"Sillas gamer 🦼" },
];

export function getProducts() {
    return new Promise((resolve)=> {
        setTimeout(() => resolve(products), 2000);
    });
}


export function getProduct(idParams) {
    return new Promise((resolve) => {
        let productReq = products.find((articulo) => {
            return (articulo.id === idParams)
    })
        
        setTimeout(() => resolve(productReq), 2000);
    });
}

export function getProductsByCategory(idCategoryParams) {
    return new Promise((resolve) => {
        let arrayfilterProducts = products.filter( articulo => articulo.category === idCategoryParams);
        setTimeout(() => resolve(arrayfilterProducts), 2000);
    });
}