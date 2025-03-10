## 🚀 **Simulación de Proyectiles en un Plano Cartesiano**  

Este proyecto es una **simulación interactiva de un proyectil**, donde puedes ajustar la velocidad inicial y el ángulo de lanzamiento para observar su trayectoria en un **plano cartesiano interactivo**.  

### ✨ **Características**  
✅ Simulación de la trayectoria de un proyectil en 2D.  
✅ Interfaz gráfica interactiva con escalas en **X** y **Y**.  
✅ Control en tiempo real de **velocidad inicial** y **ángulo de lanzamiento**.  
✅ Representación en un **plano cartesiano con centro en (0,0)**.  

---

## 🔧 **Instrucciones para Ejecutar el Proyecto**  

### 📌 **1. Clonar el repositorio**  
Abre la terminal y ejecuta:  
```bash
git clone https://github.com/tu-usuario/proyectil-simulacion.git
cd proyectil-simulacion
```

---

### 📌 **2. Abrir el Proyecto en un Navegador**  
Puedes abrir el archivo `index.html` directamente en un navegador o usar un servidor local con **Live Server** en VS Code.  

#### 🔹 **Opción 1: Abrir directamente en el navegador**
1. Ve a la carpeta del proyecto.
2. Abre el archivo `index.html` en tu navegador.

#### 🔹 **Opción 2: Usar Live Server en VS Code**
1. Instala la extensión **Live Server** en VS Code.
2. Abre la carpeta del proyecto en VS Code.
3. Haz clic derecho en `index.html` y selecciona **"Open with Live Server"**.

---

## 📂 **Estructura del Proyecto**
```bash
/proyectil-simulacion/
│── css/                           # Archivos de estilos
│   │── styles.css                  # Estilos de la interfaz gráfica
│── js/                             # Código de simulación
│   │── proyectil.js                 # Lógica del movimiento del proyectil
│   │── sketch.js                    # Configuración y renderizado en p5.js
│   │── ui.js                        # Interacción con la interfaz gráfica
│── index.html                      # Página principal con la simulación
│── README.md                        # Documentación del proyecto
```

---

## 🖥 **Interfaz del Proyecto**  
- La simulación muestra la **trayectoria del proyectil** en un plano cartesiano.  
- Puedes ajustar la **velocidad inicial (m/s)** y el **ángulo de lanzamiento (°)** desde la interfaz.  
- La escala se mantiene con **1 metro = 1 píxel** para mayor precisión.  
- Se incluyen datos en tiempo real sobre **posición, velocidad y tiempo de vuelo**.

---

## 📌 **Notas Importantes**
- 📏 El proyectil se lanza **desde el origen (0,0)**.  
- 🎯 La simulación solo funciona para ángulos **entre 0° y 180°**.  
- 🔄 Puedes reiniciar la simulación con el botón **"Reiniciar"**.  
- 📉 La gravedad se aplica en la simulación para calcular la trayectoria correctamente.  
