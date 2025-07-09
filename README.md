# React Atomic Design - Component Library & E-commerce Demo

Una aplicación de demostración que implementa los principios de **Atomic Design** en React, funcionando como una tienda online completa y una biblioteca de componentes reutilizables con showcases interactivos.

## 🎯 Objetivo del Proyecto

Este proyecto demuestra la implementación práctica de **Atomic Design** de Brad Frost en React, mostrando cómo construir interfaces escalables y mantenibles mediante componentes atómicos reutilizables.

## 🚀 Demo en Vivo

Visita la aplicación: [https://inadaptados.github.io/react-atomic-design](https://inadaptados.github.io/react-atomic-design)

## 🧪 Atomic Design Structure

### Átomos (Atoms)

- **Button**: Componente base reutilizable con múltiples variantes

### Moléculas (Molecules)

- **Card**: Combinación de Button + elementos de producto
- **List Item**: Elementos individuales de lista con interacciones

### Organismos (Organisms)

- **List**: Colección de Cards con funcionalidad de vista grid/lista
- **Product Catalog**: Sistema completo de navegación de productos

### Templates & Pages

- **Showcases**: Páginas de demostración para cada componente
- **E-commerce Layout**: Template principal de la aplicación

## 📋 Características

### 🏪 E-commerce Demo Funcional

- **Catálogo de productos** con 8 productos reales
- **Carrito de compras** persistente con localStorage
- **Búsqueda en tiempo real** por nombre, descripción y marca
- **Filtros dinámicos** por categoría (smartphones, laptops, tablets, audio)
- **Vista intercambiable** entre grid y lista
- **Estados de producto** (en stock/agotado)
- **Navegación responsive** adaptable a móviles

### 🎨 Component Library con Showcases

- **ButtonShowcase**: Documentación completa de variantes y estados
- **CardShowcase**: Ejemplos con productos reales y casos de uso
- **ListShowcase**: Demostraciones con filtros y estadísticas del catálogo
- **Código de ejemplo** en vivo para cada componente
- **Tablas de props** detalladas
- **Casos de uso reales** documentados

### 🛠️ Arquitectura Moderna

- **Separación clara** entre componentes, servicios y estilos
- **Servicios centralizados** para productos y carrito
- **Hooks personalizados** (useProducts, useCart)
- **CSS modular** sin librerías externas

## 🏗️ Estructura del Proyecto

```
react-atomic-design/
├── public/
│   ├── products/              # Imágenes reales de productos
│   │   ├── iPhone 14 Pro.jpg
│   │   ├── MacBook Air M2.jpg
│   │   ├── Samsung Galaxy S23.jpg
│   │   ├── Dell XPS 13.jpeg
│   │   ├── iPad Pro 12.9.jpeg
│   │   ├── Sony WH-1000XM5.avif
│   │   ├── Google Pixel 7.jpg
│   │   └── Microsoft Surface Laptop 5.jpg
│   └── index.html
├── src/
│   ├── components/            # Componentes Atomic Design
│   │   ├── Button.jsx         # Átomo
│   │   ├── Card.jsx           # Molécula
│   │   ├── List.jsx           # Organismo
│   │   ├── ButtonShowcase.jsx # Template
│   │   ├── CardShowcase.jsx   # Template
│   │   └── ListShowcase.jsx   # Template
│   ├── services/             # Lógica de negocio
│   │   ├── productService.js # Gestión de productos
│   │   └── cartService.js    # Gestión del carrito
│   ├── styles/               # CSS modular
│   │   ├── globals.css       # Estilos globales
│   │   ├── App.css          # Layout principal
│   │   ├── Button.css       # Estilos del átomo
│   │   ├── Card.css         # Estilos de la molécula
│   │   ├── List.css         # Estilos del organismo
│   │   └── *Showcase.css    # Estilos de templates
│   ├── App.js               # Página principal
│   └── index.js             # Punto de entrada
├── package.json
└── README.md
```

## 🧩 Componentes (Atomic Design)

### 🔹 Button (Átomo)

Componente base reutilizable con múltiples variantes y estados.

```jsx
<Button
  text="Agregar al carrito"
  color="success"
  variant="solid"
  onClick={handleClick}
  disabled={false}
/>
```

**Props disponibles:**

- `text` (string): Texto del botón
- `color`: "primary" | "secondary" | "success" | "danger"
- `variant`: "solid" | "outline"
- `onClick` (function): Manejador de eventos
- `disabled` (boolean): Estado deshabilitado
- `className` (string): Clases CSS adicionales

### 🔹 Card (Molécula)

Combina múltiples átomos para mostrar información de producto.

```jsx
<Card product={product} onAddToCart={handleAddToCart} showButton={true} />
```

**Props disponibles:**

- `product` (object): Objeto con estructura del producto
- `onAddToCart` (function): Función para agregar al carrito
- `showButton` (boolean): Controla visibilidad del botón

**Estructura del objeto product:**

```javascript
{
  id: 1,
  name: "iPhone 14 Pro",
  description: "Descripción del producto...",
  price: 999.99,
  image: "./products/iPhone 14 Pro.jpg",
  inStock: true,
  category: "smartphones",
  brand: "Apple"
}
```

### 🔹 List (Organismo)

Organismo complejo que gestiona colecciones de productos.

```jsx
<List
  products={products}
  onAddToCart={handleAddToCart}
  title="Catálogo de Productos"
/>
```

**Funcionalidades:**

- Toggle entre vista grid y lista
- Gestión de productos vacíos
- Títulos dinámicos con contadores
- Responsive design automático

## 🔧 Servicios

### ProductService

Simula una API REST con datos persistentes y operaciones asíncronas.

```javascript
import { productService } from "./services/productService";

// Operaciones disponibles
const products = await productService.getAllProducts();
const results = await productService.searchProducts("iPhone");
const smartphones = await productService.getProductsByCategory("smartphones");
const appleProducts = await productService.getProductsByBrand("Apple");
const inStock = await productService.getInStockProducts();
const categories = await productService.getCategories();
```

### CartService

Gestión completa del carrito con persistencia en localStorage.

```javascript
import { cartService, useCart } from "./services/cartService";

// Hook personalizado
const { cart, addProduct, removeProduct, totalItems, totalPrice } = useCart();

// Métodos directos
cartService.addProduct(product);
cartService.updateQuantity(productId, quantity);
cartService.clearCart();
const isProductInCart = cartService.isInCart(productId);
```

## 📊 Catálogo de Productos Real

El proyecto incluye **8 productos reales** con imágenes auténticas:

| Categoría      | Productos                                         | En Stock | Precio Promedio |
| -------------- | ------------------------------------------------- | -------- | --------------- |
| 📱 Smartphones | iPhone 14 Pro, Samsung Galaxy S23, Google Pixel 7 | 1/3      | $666            |
| 💻 Laptops     | MacBook Air M2, Dell XPS 13, Surface Laptop 5     | 3/3      | $1,166          |
| 📱 Tablets     | iPad Pro 12.9"                                    | 1/1      | $1,099          |
| 🎧 Audio       | Sony WH-1000XM5                                   | 1/1      | $399            |

**Marcas disponibles:** Apple, Samsung, Google, Dell, Microsoft, Sony

## 🎨 Design System

### Paleta de Colores

```css
:root {
  --primary: #007bff; /* Azul principal */
  --secondary: #6c757d; /* Gris secundario */
  --success: #28a745; /* Verde éxito */
  --danger: #dc3545; /* Rojo peligro */
  --background: #f8f9fa; /* Fondo claro */
  --text: #333; /* Texto principal */
}
```

### Tipografía

- **Font Family:** Arial, sans-serif (sistema)
- **Weights:** 400 (normal), 500 (medium), 600 (semibold), 700 (bold)
- **Scale:** 12px - 36px con proporción armónica

### Espaciado

- **Base unit:** 4px
- **Scale:** 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px

## 📱 Responsive Design

### Breakpoints

- **Mobile:** < 480px (single column)
- **Tablet:** 481px - 768px (2 columns)
- **Desktop:** > 769px (3+ columns)

### Características Responsive

- **Grid adaptativo** con CSS Grid
- **Navegación colapsable** en móviles
- **Imágenes optimizadas** con object-fit
- **Touch-friendly** buttons (44px mínimo)

## 🚀 Instalación y Desarrollo

### Prerrequisitos

- Node.js 22+
- npm 10+ o yarn 1.22+

### Instalación Local

```bash
# Clonar repositorio
git clone https://github.com/Inadaptados/react-atomic-design.git
cd react-atomic-design

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

**Servidor local:** [http://localhost:3000](http://localhost:3000)

### Scripts Disponibles

```bash
npm start          # Desarrollo (puerto 3000)
npm run build      # Build optimizado para producción
npm run test       # Ejecutar test suite
npm run deploy     # Deploy automático a GitHub Pages
```

## 🌐 Deployment

### GitHub Pages (Configurado)

El proyecto ya está configurado para deploy automático:

```bash
npm run deploy
```

**URL de producción:** [https://inadaptados.github.io/react-atomic-design](https://inadaptados.github.io/react-atomic-design)

## 🤝 Contribución

### Workflow de Contribución

1. **Fork** el repositorio
2. **Clone** tu fork localmente
3. **Crear rama** para tu feature
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
4. **Desarrollar** siguiendo los estándares del proyecto
5. **Testing** completo de cambios
6. **Commit** con mensajes descriptivos
   ```bash
   git commit -m "feat: agregar componente Modal siguiendo Atomic Design"
   ```
7. **Push** y crear **Pull Request**

### Estándares de Código

- **ESLint** configurado con React rules
- **Prettier** para formateo consistente
- **Conventional Commits** para mensajes
- **Atomic Design** principles

## 📚 Recursos y Referencias

### Atomic Design

- [Atomic Design Methodology](https://atomicdesign.bradfrost.com/) - Brad Frost
- [Design Systems Handbook](https://www.designbetter.co/design-systems-handbook) - InVision

### React Best Practices

- [React Documentation](https://react.dev/)
- [Thinking in React](https://react.dev/learn/thinking-in-react)
- [React Patterns](https://reactpatterns.com/)

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT** - ver [LICENSE](LICENSE) para más detalles.

## 👥 Equipo

**Inadaptados Development Team**

- **Autor Principal:** [Rodrigo Leanos Bermejo](https://github.com/inadaptados)
- **Organización:** [Inadaptados](https://github.com/Inadaptados)
- **Proyecto:** React Atomic Design Implementation

### Contacto

- 🐙 **GitHub:** [@Inadaptados](https://github.com/Inadaptados)
- 🌐 **Website:** [inadaptados.dev](https://inadaptados.dev)

## 🙏 Agradecimientos

- **Brad Frost** por la metodología Atomic Design
- **React Team** por la librería y documentación
- **Create React App** por la configuración base
- **GitHub** por el hosting gratuito en GitHub Pages
- **Open Source Community** por las herramientas utilizadas

---

🚀 **¿Quieres contribuir?** ¡Las contribuciones son bienvenidas! Lee nuestra guía de contribución arriba.
