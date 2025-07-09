import React from "react";
import Button from "./Button";
import "../styles/ButtonShowcase.css";

const ButtonShowcase = () => {
  const handleClick = (buttonType) => {
    console.log(`Botón ${buttonType} clickeado!`);
  };

  return (
    <div className="button-showcase">
      <h1 className="showcase-title">Showcase de Botones</h1>
      <section className="showcase-section">
        <h2 className="section-title">Variantes Sólidas</h2>
        <div className="button-grid">
          <div className="button-item">
            <Button
              text="Primary"
              color="primary"
              variant="solid"
              onClick={() => handleClick("Primary Solid")}
            />
            <code className="button-code">
              {`<Button text="Primary" color="primary" variant="solid" />`}
            </code>
          </div>
          <div className="button-item">
            <Button
              text="Secondary"
              color="secondary"
              variant="solid"
              onClick={() => handleClick("Secondary Solid")}
            />
            <code className="button-code">
              {`<Button text="Secondary" color="secondary" variant="solid" />`}
            </code>
          </div>
          <div className="button-item">
            <Button
              text="Success"
              color="success"
              variant="solid"
              onClick={() => handleClick("Success Solid")}
            />
            <code className="button-code">
              {`<Button text="Success" color="success" variant="solid" />`}
            </code>
          </div>
          <div className="button-item">
            <Button
              text="Danger"
              color="danger"
              variant="solid"
              onClick={() => handleClick("Danger Solid")}
            />
            <code className="button-code">
              {`<Button text="Danger" color="danger" variant="solid" />`}
            </code>
          </div>
        </div>
      </section>
      <section className="showcase-section">
        <h2 className="section-title">Variantes Outline</h2>
        <div className="button-grid">
          <div className="button-item">
            <Button
              text="Primary"
              color="primary"
              variant="outline"
              onClick={() => handleClick("Primary Outline")}
            />
            <code className="button-code">
              {`<Button text="Primary" color="primary" variant="outline" />`}
            </code>
          </div>
          <div className="button-item">
            <Button
              text="Secondary"
              color="secondary"
              variant="outline"
              onClick={() => handleClick("Secondary Outline")}
            />
            <code className="button-code">
              {`<Button text="Secondary" color="secondary" variant="outline" />`}
            </code>
          </div>
          <div className="button-item">
            <Button
              text="Success"
              color="success"
              variant="outline"
              onClick={() => handleClick("Success Outline")}
            />
            <code className="button-code">
              {`<Button text="Success" color="success" variant="outline" />`}
            </code>
          </div>
          <div className="button-item">
            <Button
              text="Danger"
              color="danger"
              variant="outline"
              onClick={() => handleClick("Danger Outline")}
            />
            <code className="button-code">
              {`<Button text="Danger" color="danger" variant="outline" />`}
            </code>
          </div>
        </div>
      </section>
      <section className="showcase-section">
        <h2 className="section-title">Estados Deshabilitados</h2>
        <div className="button-grid">
          <div className="button-item">
            <Button
              text="Disabled Solid"
              color="primary"
              variant="solid"
              disabled={true}
              onClick={() => handleClick("Disabled")}
            />
            <code className="button-code">
              {`<Button text="Disabled" color="primary" disabled={true} />`}
            </code>
          </div>
          <div className="button-item">
            <Button
              text="Disabled Outline"
              color="secondary"
              variant="outline"
              disabled={true}
              onClick={() => handleClick("Disabled")}
            />
            <code className="button-code">
              {`<Button text="Disabled" color="secondary" variant="outline" disabled={true} />`}
            </code>
          </div>
        </div>
      </section>
      <section className="showcase-section">
        <h2 className="section-title">Casos de Uso Reales</h2>
        <div className="use-cases">
          <div className="use-case">
            <h3>Carrito de Compras</h3>
            <div className="use-case-buttons">
              <Button
                text="Agregar al carrito"
                color="success"
                variant="solid"
                onClick={() => handleClick("Add to Cart")}
              />
              <Button
                text="Comprar ahora"
                color="primary"
                variant="solid"
                onClick={() => handleClick("Buy Now")}
              />
              <Button
                text="Agregar a favoritos"
                color="secondary"
                variant="outline"
                onClick={() => handleClick("Add to Wishlist")}
              />
            </div>
          </div>
          <div className="use-case">
            <h3>Formularios</h3>
            <div className="use-case-buttons">
              <Button
                text="Guardar"
                color="success"
                variant="solid"
                onClick={() => handleClick("Save")}
              />
              <Button
                text="Cancelar"
                color="secondary"
                variant="outline"
                onClick={() => handleClick("Cancel")}
              />
              <Button
                text="Eliminar"
                color="danger"
                variant="outline"
                onClick={() => handleClick("Delete")}
              />
            </div>
          </div>
          <div className="use-case">
            <h3>Navegación</h3>
            <div className="use-case-buttons">
              <Button
                text="Ver más"
                color="primary"
                variant="outline"
                onClick={() => handleClick("View More")}
              />
              <Button
                text="Volver"
                color="secondary"
                variant="outline"
                onClick={() => handleClick("Go Back")}
              />
            </div>
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
                  <code>text</code>
                </td>
                <td>string</td>
                <td>-</td>
                <td>Texto a mostrar en el botón</td>
                <td>Cualquier string</td>
              </tr>
              <tr>
                <td>
                  <code>color</code>
                </td>
                <td>string</td>
                <td>"primary"</td>
                <td>Color del botón</td>
                <td>"primary", "secondary", "success", "danger"</td>
              </tr>
              <tr>
                <td>
                  <code>variant</code>
                </td>
                <td>string</td>
                <td>"solid"</td>
                <td>Variante visual del botón</td>
                <td>"solid", "outline"</td>
              </tr>
              <tr>
                <td>
                  <code>onClick</code>
                </td>
                <td>function</td>
                <td>-</td>
                <td>Función a ejecutar al hacer click</td>
                <td>Cualquier función</td>
              </tr>
              <tr>
                <td>
                  <code>disabled</code>
                </td>
                <td>boolean</td>
                <td>false</td>
                <td>Deshabilita el botón</td>
                <td>true, false</td>
              </tr>
              <tr>
                <td>
                  <code>className</code>
                </td>
                <td>string</td>
                <td>""</td>
                <td>Clases CSS adicionales</td>
                <td>Cualquier string de clases CSS</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default ButtonShowcase;
