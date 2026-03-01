# 📤 Cómo Subir tu Trabajo a GitHub

## 📋 Requisitos Previos

1. Tener cuenta en GitHub (https://github.com/signup)
2. Tener Git instalado (https://git-scm.com/downloads)
3. Tener Node.js instalado (https://nodejs.org/)

---

## 🚀 Paso 1: Descomprimir el ZIP

1. Descarga el archivo `javascript-basico.zip`
2. Extrae el contenido en una carpeta de tu computadora

---

## 🚀 Paso 2: Crear Repositorio en GitHub

1. Ve a https://github.com/new
2. Completa los datos:
      - **Repository name:** `javascript-basico`
      - **Descripción:** Ejercicios de JavaScript Básico Fundamentos Programión
      - **Visibilidad:** Público o Privado (tu elección)
      - **NO marques** "Add README" (déjalo vacío)
3. Click en **"Create repository"**

---

## 🚀 Paso 3: Subir el Código desde tu Computadora

### Opción A: Con Git (Recomendada)

```bash
# 1. Abre la terminal en la carpeta del proyecto
cd ruta/de/tu/carpeta/javascript-basico

# 2. Inicializa Git
git init

# 3. Agrega todos los archivos
git add .

# 4. Primer commit
git commit -m "Inicio: ejercicios JavaScript básico"

# 5. Conecta con tu repositorio de GitHub - (Reemplaza TU-USUARIO con tu username de GitHub)
git remote add origin https://github.com/TU-USUARIO/javascript-basico.git

# 6. Cambia el nombre de la rama a main
git branch -M main

# 7. Sube los archivos a GitHub
git push -u origin main
```

## 🚀 Paso 4: Trabajar en los Ejercicios

```bash
# 1. Instala dependencias
npm install

# 2. Abre en VSCode
code .

# 3. Edita src/ejercicios.js

# 4. Prueba tus soluciones
npm test

# 5. Repite hasta que todos los tests pasen ✅
```

## 🚀 Paso 5: Actualizar tu Repositorio (Cada vez que avances)

```bash

# 1. Agrega los cambios
git add .

# 2. Confirma los cambios
git commit -m "Completado: ejercicios 1-6"

# 3. Sube a GitHub
git push

💡 Recomendado: Haz commits frecuentes para mostrar tu progreso.
```

## 🚀 Paso 6: Entregar

```bash
# 1. Verifica que tu repositorio esté actualizado en GitHub
# 2. Copia el link de tu repositorio
# 3. Envía el link
```
