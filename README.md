# Algoritmos

Este proyecto contiene implementaciones de varios algoritmos en JavaScript.

### Algoritmos de Búsqueda:

**Búsqueda Lineal (Linear Search)**: Recorre cada elemento de una lista hasta encontrar el objetivo. Es importante porque es simple y funciona bien con listas pequeñas.

**Búsqueda Binaria (Binary Search)**: Divide repetidamente una lista ordenada a la mitad para encontrar un objetivo. Es crucial porque es mucho más eficiente que la búsqueda lineal en listas grandes.

**Búsqueda en Profundidad (Depth-First Search)**: Explora tan profundo como sea posible a lo largo de cada rama antes de retroceder. Es fundamental para problemas de grafos y árboles.

**Búsqueda en Anchura (Breadth-First Search)**: Explora todos los nodos a un nivel antes de pasar al siguiente. Es esencial para encontrar la ruta más corta en grafos no ponderados.

### Algoritmos de Ordenamiento:

**Ordenamiento por Inserción (Insertion Sort)**: Construye la lista ordenada uno a uno. Es importante por su simplicidad y eficiencia en listas pequeñas o casi ordenadas.

**Ordenamiento por Selección (Selection Sort)**: Selecciona repetidamente el elemento más pequeño y lo coloca en su posición correcta. Es útil para entender los conceptos básicos de ordenamiento.

**Ordenamiento por Mezcla (Merge Sort)**: Divide la lista en sublistas más pequeñas y luego las combina en orden. Es importante por su eficiencia y uso en listas grandes.

**Ordenamiento por Montículo (Heap Sort)**: Utiliza una estructura de datos de montículo para ordenar elementos. Es crucial por su eficiencia y uso en aplicaciones de tiempo real.

**Ordenamiento por Conteo (Counting Sort)**: Cuenta la ocurrencia de cada elemento y los ordena. Es útil para listas con un rango limitado de valores.

**Ordenamiento Radix (Radix Sort)**: Ordena números por sus dígitos. Es importante para ordenar grandes conjuntos de datos numéricos.

**Ordenamiento Shell (Shell Sort)**: Mejora el ordenamiento por inserción al comparar elementos distantes. Es útil por su simplicidad y eficiencia en listas medianas.

**Ordenamiento Rápido (Quick Sort)**: Divide y conquista al seleccionar un pivote y particionar la lista. Es crucial por ser uno de los algoritmos de ordenamiento más rápidos en la práctica.

**Ordenamiento Burbuja (Bubble Sort)**: Repetidamente intercambia elementos adyacentes si están en el orden incorrecto. Es importante para entender los conceptos básicos de ordenamiento.

### Algoritmos de Grafos:

**Algoritmo de Dijkstra**: Encuentra la ruta más corta desde un nodo a todos los demás en un grafo ponderado. Es esencial para aplicaciones de redes y mapas.

**Algoritmo de Floyd-Warshall**: Encuentra las rutas más cortas entre todos los pares de nodos en un grafo. Es importante para problemas de rutas múltiples.

**Algoritmo de Kruskal**: Encuentra el árbol de expansión mínima en un grafo. Es crucial para problemas de conexión mínima.

**Algoritmo de Prim**: Encuentra el árbol de expansión mínima desde un nodo inicial. Es útil para problemas de redes y diseño de circuitos.

**Algoritmo de Bellman-Ford**: Encuentra la ruta más corta desde un nodo a todos los demás, incluso con pesos negativos. Es importante para grafos con pesos negativos.

**Algoritmo de Tarjan**: Encuentra componentes fuertemente conectadas en un grafo. Es esencial para análisis de grafos y problemas de conectividad.

**Algoritmo de Kosaraju**: Encuentra componentes fuertemente conectadas en un grafo dirigido. Es útil para análisis de dependencias y problemas de conectividad.

### Algoritmos de Programación Dinámica:

**Algoritmo de la Mochila (Knapsack Problem)**: Maximiza el valor en una mochila con un peso limitado. Es crucial para problemas de optimización y recursos limitados.

**Algoritmo de la Subcadena Común Más Larga (Longest Common Subsequence)**: Encuentra la subcadena más larga común entre dos secuencias. Es importante para comparación de secuencias y bioinformática.

**Algoritmo de la Subcadena Palindrómica Más Larga (Longest Palindromic Substring)**: Encuentra la subcadena palindrómica más larga en una cadena. Es útil para problemas de análisis de cadenas.

**Algoritmo de la Cadena de Matrices (Matrix Chain Multiplication)**: Minimiza el costo de multiplicar una cadena de matrices. Es esencial para optimización en álgebra lineal.

### Algoritmos de Geometría Computacional:

**Algoritmo de Convex Hull (Graham's Scan, Jarvis March)**: Encuentra el envolvente convexa de un conjunto de puntos. Es crucial para problemas de geometría y gráficos por computadora.

**Algoritmo de Intersección de Segmentos de Línea (Line Segment Intersection)**: Determina si dos segmentos de línea se intersectan. Es importante para problemas de geometría y gráficos.

### Algoritmos de Compresión:

**Algoritmo de Huffman**: Codifica datos de manera eficiente utilizando árboles binarios. Es esencial para compresión de datos y transmisión eficiente.

**Algoritmo de Lempel-Ziv-Welch (LZW)**: Comprime datos utilizando diccionarios dinámicos. Es importante para compresión de archivos y transmisión de datos.

### Algoritmos de Criptografía:

**Algoritmo RSA**: Cifra y descifra datos utilizando claves públicas y privadas. Es crucial para seguridad y comunicaciones seguras.

**Algoritmo de Diffie-Hellman**: Permite el intercambio seguro de claves criptográficas. Es esencial para establecer comunicaciones seguras.

**Algoritmo de Cifrado AES (Advanced Encryption Standard)**: Cifra datos de manera segura utilizando bloques de datos. Es importante para seguridad de datos y comunicaciones.

## Algoritmos disponibles

- [Binary Search](algorithms/binarySearch.js)
- [Bubble Sort](algorithms/bubbleSort.js)
- [Breadth-First Search](algorithms/breadthFirstSearch.js)
- [Bellman-Ford](algorithms/bellmanFord.js)
- [Counting Sort](algorithms/countingSort.js)
- [Convex Hull](algorithms/convexHull.js)
- [Depth First Search](algorithms/depthFirstSearch.js)
- [Dijkstra](algorithms/dijkstra.js)
- [Floyd Warshall](algorithms/floydWarshall.js)
- [Heap Sort](algorithms/heapSort.js)
- [Insertion Sort](algorithms/insertionSort.js)
- [Kruskal](algorithms/kruskal.js)
- [Linear Search](algorithms/linearSearch.js)
- [Matrix Chain Multiplication](algorithms/matrixChainMultiplication.js)
- [Merge Sort](algorithms/mergeSort.js)
- [Prim](algorithms/prim.js)
- [Quick Sort](algorithms/quickSort.js)
- [Radix Sort](algorithms/radixSort.js)
- [RSA](algorithms/rsa.js)
- [Selection Sort](algorithms/selectionSort.js)
- [Shell Sort](algorithms/shellSort.js)

## Cómo ejecutar los algoritmos

Para ejecutar cualquiera de los algoritmos, puedes usar los scripts definidos en el archivo `package.json`. Por ejemplo, para ejecutar el algoritmo de Bubble Sort, usa el siguiente comando:

```sh
npm run bubbleSort