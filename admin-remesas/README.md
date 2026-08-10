# Admin Remesas

Aplicación administrativa para gestión de remesas, creada con Vite + React.

## Tecnologías
- Vite (bundler / dev server)
- React 18
- Ant Design 6 (componentes)
- Zustand (state management)
- FontAwesome (iconos)
- Sass/SCSS (estilos por componente en `src/styles`)
- Vitest + Testing Library (pruebas unitarias)

## Estructura principal
- `src/` - código fuente
  - `components/` - componentes atómicos y de presentación
  - `layouts/` - paneles y layout principales (CalculatorPanel, RemittancesPanel, DashboardLayout)
  - `styles/` - archivos SCSS por componente
  - `store/` - hooks y store de Zustand (`useRemittanceStore.js`)
  - `utils/` - utilidades y API (`remittanceApi.js`)
  - `test/` - pruebas unitarias de ejemplo (Vitest)

## Requisitos
- Node.js v16+ (recomendado)
- npm (o yarn/pnpm)

## Instalación
1. Entra en la carpeta del proyecto `admin-remesas`:

```bash
cd admin-remesas
```

2. Instala dependencias:

```bash
npm install
```

## Comandos útiles
- `npm run dev` — inicia el servidor de desarrollo (Vite)
- `npm run build` — genera los assets para producción
- `npm run preview` — vista previa del build de producción
- `npm test` — ejecuta la suite de pruebas (Vitest)

## Testing
Se usa Vitest y Testing Library. Los tests se encuentran en `src/test/`.

Ejecutar tests:

```bash
npm test
```

## Estilos
Los estilos por componente están en `src/styles/*.scss`. Para que funcionen se utiliza `sass` (ya incluido en `devDependencies`). Cada componente que necesite estilos importa su SCSS correspondiente.

## Notas de desarrollo
- La lista de remesas y la paginación usan Ant Design `Table` y `Pagination`.
- El estado central está en `src/store/useRemittanceStore.js`.
- Los componentes `CalculatorPanel` y `RemittancesPanel` están en `src/layouts/` porque actúan como contenedores de la UI.

## Contribuir
1. Crea un branch con tu cambio
2. Asegúrate que las pruebas pasen
3. Abre un pull request con una descripción clara

---
Si quieres que añada un badge de cobertura, integración continua (GitHub Actions), o ejemplos adicionales de tests, puedo prepararlo.

## Cómo usar la aplicación (guía rápida)

1. Abrir la app en modo desarrollo:

```bash
cd admin-remesas
npm run dev
```

2. Panel `CalculatorPanel` (Ventanilla Digital):
- Usa el teclado en pantalla (Keypad) o escribe en el campo superior para introducir el ID de la remesa.
- Presiona el botón confirmar (tick) o la tecla `Enter` para marcar la remesa como cobrada. Si la remesa no existe o ya fue cobrada, verás una notificación amable.

3. Panel `RemittancesPanel` (Listado de remesas):
- Haz clic en el icono de lupa para desplegar el input de búsqueda.
- Escribe un término (id, compañía o monto) y presiona `Enter` o el botón de búsqueda para filtrar.
- Las remesas están ordenadas por `charged_at` (fecha de cobro) descendente — las más recientes primero. Las remesas sin fecha de cobro aparecen al final (sin cobrar).

4. Paginación y navegación:
- Usa la paginación debajo de la tabla para navegar entre páginas. El total de remesas y la paginación respetan el orden aplicado.

5. Mensajes y errores:
- Los errores se muestran en modales con mensajes amigables (por ejemplo, "No se encontró ninguna remesa que coincida con la búsqueda.").

6. Tests
- Los tests de ejemplo están en `src/test/`. Ejecuta `npm test` para correrlos.

# Admin Remesas

Proyecto React creado con JavaScript puro y Vite.

## Comandos

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`
