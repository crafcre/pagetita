  // Mapa de especificaciones por sabor (puedes ajustar el HTML que necesites)
  const specs = {
    'Queso': `
      <ul style="text-align:left; padding:0 1rem;">
        <li><strong>Peso Neto:</strong> 540 g (12 unidades)</li>
        <li><strong>Ingredientes masa:</strong> Maíz peto precocido, sal, azúcar.</li>
        <li><strong>Preparación:</strong> Freír 7–10 min / Horno 250 °C 30–40 min.</li>
        <li><strong>Calorías:</strong> ~230 kcal por porción (45 g).</li>
        <li><strong>Contacto:</strong> @empanadastita – 313 453 0883</li>
      </ul>
    `,
    'Carne': `
      <ul style="text-align:left; padding:0 1rem;">
        <li><strong>Peso Neto:</strong> 640 g (12 unidades)</li>
        <li><strong>Relleno:</strong> Carne, cebolla, papa.</li>
        <li><strong>Preparación:</strong> Freír 7–10 min / Horno 250 °C 30–40 min.</li>
        <li><strong>Calorías:</strong> ~290 kcal por porción.</li>
        <li><strong>Sodio:</strong> 160 mg por porción.</li>
      </ul>
    `,
    'Papa-Carne': `
      <ul style="text-align:left; padding:0 1rem;">
        <li><strong>Peso Neto:</strong> 765 g (17 unidades)</li>
        <li><strong>Relleno:</strong> Papa y carne.</li>
        <li><strong>Preparación:</strong> Freír 7–10 min / Horno 250 °C 30–40 min.</li>
        <li><strong>Calorías:</strong> ~310 kcal por porción.</li>
        <li><strong>Sodio:</strong> 170 mg por porción.</li>
      </ul>
    `
  };

  // Asocia evento a todos los botones
  document.querySelectorAll('.spec-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const sabor = btn.dataset.sabor;
      Swal.fire({
        title: `Especificaciones – Empanada de ${sabor}`,
        html: specs[sabor],
        showCloseButton: true,
        confirmButtonText: 'Cerrar',
        confirmButtonColor: '#E20505',
        background: '#fff',
      });
    });
  });

