import React, { useState, useEffect } from "react";
import List from "./List";
import { productService } from "../services/productService";
import "../styles/ListShowcase.css";

const ListShowcase = () => {
  const [realProducts, setRealProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const products = await productService.getAllProducts();
        setRealProducts(products);
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const handleAddToCart = (product) => {
    console.log(`${product.name} agregado al carrito!`);
  };

  if (loading) {
    return <div className="loading-container">Cargando productos...</div>;
  }

  const productSubsets = {
    all: realProducts,
    limited: realProducts.slice(0, 3),
    single: realProducts.slice(0, 1),
    empty: [],
  };

  return (
    <div className="list-showcase">
      <h1 className="showcase-title">Showcase de Lists</h1>
      <section className="showcase-section">
        <h2 className="section-title">Lista Completa de Productos</h2>
        <div className="list-demo">
          <List
            products={productSubsets.all}
            onAddToCart={handleAddToCart}
            title="Catálogo Completo de Productos"
          />
        </div>
        <code className="list-code">
          {`<List
  products={allProducts}
  onAddToCart={handleAddToCart}
  title="Catálogo Completo de Productos"
/>`}
        </code>
        <p className="demo-description">
          Lista con todos los productos disponibles ({realProducts.length}{" "}
          productos). Incluye funcionalidad de cambio entre vista grid y lista.
        </p>
      </section>
      <section className="showcase-section">
        <h2 className="section-title">Lista con Pocos Productos</h2>
        <div className="list-demo">
          <List
            products={productSubsets.limited}
            onAddToCart={handleAddToCart}
            title="Productos Destacados"
          />
        </div>
        <code className="list-code">
          {`<List
  products={featuredProducts}
  onAddToCart={handleAddToCart}
  title="Productos Destacados"
/>`}
        </code>
        <p className="demo-description">
          Lista reducida con solo 3 productos para mostrar cómo se ve con menos
          contenido.
        </p>
      </section>
      <section className="showcase-section">
        <h2 className="section-title">Lista con Un Solo Producto</h2>
        <div className="list-demo">
          <List
            products={productSubsets.single}
            onAddToCart={handleAddToCart}
            title="Producto Individual"
          />
        </div>
        <code className="list-code">
          {`<List
  products={[singleProduct]}
  onAddToCart={handleAddToCart}
  title="Producto Individual"
/>`}
        </code>
        <p className="demo-description">
          Lista con un único producto para mostrar el comportamiento mínimo del
          componente.
        </p>
      </section>
      <section className="showcase-section">
        <h2 className="section-title">Lista Vacía</h2>
        <div className="list-demo">
          <List
            products={productSubsets.empty}
            onAddToCart={handleAddToCart}
            title="Sin Productos Disponibles"
          />
        </div>
        <code className="list-code">
          {`<List
  products={[]}
  onAddToCart={handleAddToCart}
  title="Sin Productos Disponibles"
/>`}
        </code>
        <p className="demo-description">
          Lista vacía para mostrar cómo se comporta el componente cuando no hay
          productos.
        </p>
      </section>
      <section className="showcase-section">
        <h2 className="section-title">Ejemplos con Filtros Específicos</h2>
        <div className="filter-examples">
          <div className="filter-example">
            <h3>Solo Productos en Stock</h3>
            <div className="list-demo">
              <List
                products={realProducts.filter((p) => p.inStock)}
                onAddToCart={handleAddToCart}
                title={`Productos Disponibles (${
                  realProducts.filter((p) => p.inStock).length
                })`}
              />
            </div>
            <code className="list-code">
              {`<List
  products={products.filter(p => p.inStock)}
  onAddToCart={handleAddToCart}
  title="Productos Disponibles"
/>`}
            </code>
          </div>

          <div className="filter-example">
            <h3>Solo Smartphones</h3>
            <div className="list-demo">
              <List
                products={realProducts.filter(
                  (p) => p.category === "smartphones"
                )}
                onAddToCart={handleAddToCart}
                title={`Smartphones (${
                  realProducts.filter((p) => p.category === "smartphones")
                    .length
                })`}
              />
            </div>
            <code className="list-code">
              {`<List
  products={products.filter(p => p.category === 'smartphones')}
  onAddToCart={handleAddToCart}
  title="Smartphones"
/>`}
            </code>
          </div>
          <div className="filter-example">
            <h3>Productos Apple</h3>
            <div className="list-demo">
              <List
                products={realProducts.filter((p) => p.brand === "Apple")}
                onAddToCart={handleAddToCart}
                title={`Productos Apple (${
                  realProducts.filter((p) => p.brand === "Apple").length
                })`}
              />
            </div>
            <code className="list-code">
              {`<List
  products={products.filter(p => p.brand === 'Apple')}
  onAddToCart={handleAddToCart}
  title="Productos Apple"
/>`}
            </code>
          </div>
        </div>
      </section>
      <section className="showcase-section">
        <h2 className="section-title">Casos de Uso Reales</h2>
        <div className="use-cases">
          <div className="use-case">
            <h3>Catálogo Principal</h3>
            <p>
              Muestra todos los productos disponibles con filtros y búsqueda
            </p>
            <div className="use-case-description">
              <ul>
                <li>Cambio entre vista grid y lista</li>
                <li>Título personalizable con contador</li>
                <li>Funcionalidad de agregar al carrito</li>
                <li>Productos reales con imágenes</li>
              </ul>
            </div>
          </div>
          <div className="use-case">
            <h3>Resultados de Búsqueda</h3>
            <p>Muestra productos filtrados por criterios específicos</p>
            <div className="use-case-description">
              <ul>
                <li>Título dinámico con número de resultados</li>
                <li>Manejo de estados vacíos</li>
                <li>Misma funcionalidad en ambas vistas</li>
                <li>Filtros por categoría, marca, disponibilidad</li>
              </ul>
            </div>
          </div>
          <div className="use-case">
            <h3>Categorías Específicas</h3>
            <p>Productos agrupados por categoría o marca</p>
            <div className="use-case-description">
              <ul>
                <li>Filtrado por categoría</li>
                <li>Título descriptivo de la categoría</li>
                <li>Adaptable a cualquier cantidad de productos</li>
                <li>Productos reales del catálogo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="showcase-section">
        <h2 className="section-title">Estadísticas del Catálogo Real</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <h4>Total de Productos</h4>
            <div className="stat-number">{realProducts.length}</div>
          </div>
          <div className="stat-card">
            <h4>En Stock</h4>
            <div className="stat-number">
              {realProducts.filter((p) => p.inStock).length}
            </div>
          </div>
          <div className="stat-card">
            <h4>Agotados</h4>
            <div className="stat-number">
              {realProducts.filter((p) => !p.inStock).length}
            </div>
          </div>
          <div className="stat-card">
            <h4>Categorías</h4>
            <div className="stat-number">
              {[...new Set(realProducts.map((p) => p.category))].length}
            </div>
          </div>
          <div className="stat-card">
            <h4>Marcas</h4>
            <div className="stat-number">
              {[...new Set(realProducts.map((p) => p.brand))].length}
            </div>
          </div>
          <div className="stat-card">
            <h4>Precio Promedio</h4>
            <div className="stat-number">
              $
              {(
                realProducts.reduce((sum, p) => sum + p.price, 0) /
                realProducts.length
              ).toFixed(0)}
            </div>
          </div>
        </div>
      </section>
      <section className="showcase-section">
        <h2 className="section-title">Características de las Vistas</h2>
        <div className="view-comparison">
          <div className="view-type">
            <h3>Vista Grid</h3>
            <ul>
              <li>Diseño en cuadrícula responsive</li>
              <li>Muestra más productos por fila</li>
              <li>Ideal para explorar catálogos</li>
              <li>Cards completos con imagen grande</li>
              <li>Mejor para productos visuales</li>
            </ul>
          </div>
          <div className="view-type">
            <h3>Vista Lista</h3>
            <ul>
              <li>Diseño horizontal en filas</li>
              <li>Información más compacta</li>
              <li>Ideal para comparar productos</li>
              <li>Fácil lectura de especificaciones</li>
              <li>Mejor para análisis detallado</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="showcase-section">
        <h2 className="section-title">Propiedades del Componente</h2>
        <div className="props-table">
          <table className="props-documentation">
            <thead>
              <tr>
                <th>Prop</th>
                <th>Tipo</th>
                <th>Valor por defecto</th>
                <th>Descripción</th>
                <th>Valores posibles</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>products</code>
                </td>
                <td>array</td>
                <td>[]</td>
                <td>Array de objetos producto</td>
                <td>Array de productos con estructura válida</td>
              </tr>
              <tr>
                <td>
                  <code>onAddToCart</code>
                </td>
                <td>function</td>
                <td>-</td>
                <td>Función para agregar productos al carrito</td>
                <td>Función que recibe un producto</td>
              </tr>
              <tr>
                <td>
                  <code>title</code>
                </td>
                <td>string</td>
                <td>"Nuestros Productos"</td>
                <td>Título que se muestra arriba de la lista</td>
                <td>Cualquier string</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="showcase-section">
        <h2 className="section-title">Funcionalidades Incluidas</h2>
        <div className="features-grid">
          <div className="feature">
            <h4>🔄 Toggle de Vista</h4>
            <p>Cambio entre vista grid y lista con botones intuitivos</p>
          </div>
          <div className="feature">
            <h4>📱 Responsive</h4>
            <p>Se adapta automáticamente a diferentes tamaños de pantalla</p>
          </div>
          <div className="feature">
            <h4>🛒 Integración con Carrito</h4>
            <p>Cada producto puede ser agregado al carrito directamente</p>
          </div>
          <div className="feature">
            <h4>🏷️ Estados de Producto</h4>
            <p>Maneja productos en stock y agotados con estilos diferentes</p>
          </div>
          <div className="feature">
            <h4>📊 Contador de Productos</h4>
            <p>Muestra la cantidad de productos en el título</p>
          </div>
          <div className="feature">
            <h4>🎨 Estilos Consistentes</h4>
            <p>Mantiene la coherencia visual en ambas vistas</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListShowcase;
