# Tienda Online - React Component Library

Una aplicación de tienda online construida con React que también funciona como una biblioteca de componentes reutilizables con showcases interactivos.

## 🚀 Demo en Vivo

Visita la aplicación: [https://tu-usuario.github.io/my-app](https://tu-usuario.github.io/my-app)

## 📋 Características

### 🏪 Tienda Online Funcional

- **Catálogo de productos** con imágenes reales
- **Carrito de compras** persistente (localStorage)
- **Búsqueda y filtros** por categoría, marca y disponibilidad
- **Vista grid y lista** intercambiables
- **Estados de productos** (en stock/agotado)

### 🎨 Component Library & Showcases

- **ButtonShowcase**: Todas las variantes de botones con documentación
- **CardShowcase**: Ejemplos de cards con diferentes estados
- **ListShowcase**: Demostraciones de listas con productos reales
- **Documentación interactiva** con código de ejemplo

### 🛠️ Arquitectura Moderna

- **Separación de responsabilidades**: Componentes, servicios y estilos separados
- **Servicios centralizados**: ProductService y CartService
- **Hooks personalizados**: useProducts, useCart
- **CSS modular**: Sin estilos inline, archivos CSS organizados

## 🏗️ Estructura del Proyecto

```
my-app/
├── public/
│   ├── products/           # Imágenes reales de productos
│   │   ├── iPhone 14 Pro.jpg
│   │   ├── MacBook Air M2.jpg
│   │   └── ...
│   └── index.html
├── src/
│   ├── components/         # Componentes reutilizables
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── List.jsx
│   │   ├── ButtonShowcase.jsx
│   │   ├── CardShowcase.jsx
│   │   └── ListShowcase.jsx
│   ├── services/          # Lógica de negocio
│   │   ├── productService.js
│   │   └── cartService.js
│   ├── styles/            # Estilos CSS modulares
│   │   ├── App.css
│   │   ├── Button.css
│   │   ├── Card.css
│   │   ├── List.css
│   │   ├── ButtonShowcase.css
│   │   ├── CardShowcase.css
│   │   ├── ListShowcase.css
│   │   └── globals.css
│   ├── App.js
│   └── index.js
└── README.md
```

## 🧩 Componentes

### Button

Componente de botón reutilizable con múltiples variantes.

```jsx
<Button
  text="Agregar al carrito"
  color="success"
  variant="solid"
  onClick={handleClick}
  disabled={false}
/>
```

**Props:**

- `text` (string): Texto del botón
- `color` (string): "primary", "secondary", "success", "danger"
- `variant` (string): "solid", "outline"
- `onClick` (function): Función a ejecutar
- `disabled` (boolean): Estado deshabilitado

### Card

Componente para mostrar productos individuales.

```jsx
<Card product={product} onAddToCart={handleAddToCart} showButton={true} />
```

**Props:**

- `product` (object): Objeto con información del producto
- `onAddToCart` (function): Función para agregar al carrito
- `showButton` (boolean): Mostrar/ocultar botón

### List

Componente para mostrar listas de productos con vista grid/lista.

```jsx
<List
  products={products}
  onAddToCart={handleAddToCart}
  title="Catálogo de Productos"
/>
```

**Props:**

- `products` (array): Array de productos
- `onAddToCart` (function): Función para agregar al carrito
- `title` (string): Título de la lista

## 🔧 Servicios

### ProductService

Maneja todas las operaciones relacionadas con productos.

```javascript
import { productService } from "./services/productService";

// Obtener todos los productos
const products = await productService.getAllProducts();

// Buscar productos
const results = await productService.searchProducts(query);

// Filtrar por categoría
const smartphones = await productService.getProductsByCategory("smartphones");
```

### CartService

Gestiona el carrito de compras con persistencia.

```javascript
import { cartService } from "./services/cartService";

// Agregar producto
cartService.addProduct(product);

// Obtener carrito
const cart = cartService.getCart();

// Obtener total
const total = cartService.getTotalPrice();
```

## 📱 Características Responsive

- **Diseño adaptativo** que funciona en desktop, tablet y móvil
- **Navigation responsive** con menú colapsable
- **Grid responsive** que se adapta al tamaño de pantalla
- **Imágenes optimizadas** con lazy loading

## 🎯 Funcionalidades Destacadas

### Carrito de Compras

- **Persistencia** en localStorage
- **Contador en tiempo real** en la navegación
- **Estados de producto** (disponible/agotado)
- **Gestión de cantidades**

### Búsqueda y Filtros

- **Búsqueda en tiempo real** por nombre, descripción y marca
- **Filtros por categoría**: Smartphones, Laptops, Tablets, Audio
- **Filtro por disponibilidad**
- **Resultados dinámicos**

### Showcases Interactivos

- **Documentación visual** de cada componente
- **Ejemplos de código** en vivo
- **Casos de uso reales**
- **Tablas de props** detalladas

## 🚀 Instalación y Desarrollo

### Prerrequisitos

- Node.js 16+
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/my-app.git
cd my-app

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

La aplicación se abrirá en [http://localhost:3000](http://localhost:3000)

### Scripts Disponibles

```bash
# Desarrollo
npm start          # Servidor de desarrollo

# Producción
npm run build      # Build para producción
npm run deploy     # Deploy a GitHub Pages

# Testing
npm test           # Ejecutar tests
```

## 🌐 Deployment en GitHub Pages

### Configuración Automática

1. **Instalar gh-pages:**

```bash
npm install --save-dev gh-pages
```

2. **Agregar scripts al package.json:**

```json
{
  "homepage": "https://tu-usuario.github.io/my-app",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. **Deploy:**

```bash
npm run deploy
```

### Configuración Manual en GitHub

1. Ve a **Settings** > **Pages** en tu repositorio
2. Selecciona **Source**: Deploy from a branch
3. Selecciona **Branch**: gh-pages
4. Click **Save**

El sitio estará disponible en: `https://tu-usuario.github.io/my-app`

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca principal
- **CSS3** - Estilos (sin librerías externas)
- **LocalStorage** - Persistencia del carrito
- **GitHub Pages** - Hosting gratuito
- **Create React App** - Configuración base

## 📊 Catálogo de Productos

El proyecto incluye 8 productos de ejemplo:

| Categoría   | Productos                                         | En Stock |
| ----------- | ------------------------------------------------- | -------- |
| Smartphones | iPhone 14 Pro, Samsung Galaxy S23, Google Pixel 7 | 1/3      |
| Laptops     | MacBook Air M2, Dell XPS 13, Surface Laptop 5     | 3/3      |
| Tablets     | iPad Pro 12.9"                                    | 1/1      |
| Audio       | Sony WH-1000XM5                                   | 1/1      |

## 🎨 Guía de Estilo

### Colores

- **Primary**: #007bff (Azul)
- **Secondary**: #6c757d (Gris)
- **Success**: #28a745 (Verde)
- **Danger**: #dc3545 (Rojo)

### Tipografía

- **Font Family**: Arial, sans-serif
- **Font Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

## 🔮 Próximas Funcionalidades

- [ ] Autenticación de usuarios
- [ ] Proceso de checkout completo
- [ ] Integración con API real
- [ ] Testing automatizado
- [ ] Modo oscuro
- [ ] Internacionalización (i18n)

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para detalles.

## 👨‍💻 Autor

**Tu Nombre**

- GitHub: [@tu-usuario](https://github.com/tu-usuario)
- LinkedIn: [tu-perfil](https://linkedin.com/in/tu-perfil)

## 🙏 Agradecimientos

- Create React App por la configuración base
- Unsplash por las imágenes de placeholder
- GitHub Pages por el hosting gratuito

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
