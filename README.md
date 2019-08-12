# Prueba Ingeniería Resuelve

Esta mi solucion para la prueva de back-end para  [Resuelve](https://github.com/resuelve/prueba-ing-backend), acontinuacion
explico como ejecutar el codigo y mi pensamiento para solucionarlo.

## Para ejecutar el codigo 
```
git clone https://github.com/fatimaavilesfa/prueba-ing-backend.git

```

## En la linea de comando correr
```
node calculoSueldo.js

```

## Proceso de solucion

Para resolver este problema e usado node con calculos basicos de porcentajes, obteniendo resuldo de ` "sueldo_completo" ` 
diferente a el de el ejemplo en la documentacion.

Sospecho el ejemplo no tiene que ser el resultado esperado ya que el ` "sueldo_completo" ` aparece ser menor que ` "sueldo" ` por
lo que no puede ser lo esperado si se compara con el ejemplo detallado de los calculos y despues de provar lo manualmente.


Considerando el jemplo en la documentacion
```
[
   {  
      "nombre":"El Rulo",
      "goles_minimos":10,
      "goles":9,
      "sueldo":30000,
      "bono":15000,
      "sueldo_completo": 14250,
      "equipo":"rojo"
   }
]

```

### El Rulo

| sueldo  | bono    | goles | goles_minimos | equipo |
| ------- |:-------:| :----:| :-----------: | ------ |
| 30000   | 15000   | 9     | 10            | "rojo" |

```
la relación  de goles y goles_minimos es 9 / 10.
Lo de su equipo es 19 / 25.
Asi que el bono debe ser   9/10 * (15000 / 2) +  19/25 * (15000 / 2)
Que equivale a 12,450‬ por un sueldo completo de 42450

```