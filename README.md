# Proyecto Final React Js - CoderHouse

**Autor:** Froilán Ramos

# Información del Proyecto

Este repositorio contiene mi proyecto final realizado para el curso de ReactJs.

El proyecto se trata de un un ecommerce de una dietética llamada Natural Diet, realizado con React, modelado y maquetado principalmente con React-BootStrap y complementando con CSS; se usó FireBase como base de datos.

Antes de usar FireBase como base de datos, se usó una base de datos local con el paquete NPM JSON-server.

# Uso e Instalación

## Uso de la Web

El ecommerce fue realizado de forma sencilla e intuitiva con el fin de que el cliente pueda realizar una navegación de forma rápida y sencilla a travéz de las distitas secciones que se encuentran en la página.

Al elegir un producto para visualizarlo, el cliente podrá ver la información del mismo, seleccionar la cantidad de unidades que desea, además de poder agregarlo al carrito de compras, y si por error olvidó agregar más unidades, sin problema puede realizarlo allí mismo o volviendo al detalle del producto y seleccionando la cantidad extra que desea.

Luego de tener agregados todos los productos que desea comprar, puede ir al carrito de compras, donde le aparecerá un resumen de todo lo que eligió anteriormente, si desea puede eliminar los productos que decidió no comprar o simplemente vaciar todo el carrito presionando el boton "Vaciar Carrito". Así mismo, se encuentra el botón de "Iniciar Compra" que al presionarlo, redirecciona al cliente a la página del formulario de ingreso de datos, donde deberá rellenar el formulario con sus datos de contacto y seleccionar el método de pago para poder finalizar la compra, si deja algún campo del formulario en blanco, no podrá finalizar la compra, allí también podrá ver el resumen de la compra.

Al presionar el botón "Finalizar Compra", teniendo todos los datos ingresados, será redireccionado al Resumen de Compra, donde se visualiza la fecha, el número de compra, los datos del comprador y los productos que compró, así mismo, podrá presionar en el botón "Volver a Inicio" para ir a la página principal y seguir navegando y comprando en la web, o presionar alguna de las secciones de la barra de navegación.

Cabe destacar que si el cliente no agregó ningún producto al carrito de compras, al ingresar al carrito, este se mostrará vacío.

Existen 3 Categorias de productos, **Frutos Secos**, **Cereales** y **Legumbres**, y estas catergorías son accesibles en el menú desplegable al colocar el puntero del mouse sobre *Productos* en la barra de navagación, cada una mostrará los productos correspondientes a su catergoría. Si presionas la palabra **Productos** se mostrarán todos los productos del ecommerce.

Por otra parte, estan dos secciones más agregadas a la web, *Promociones* y *Contacto*, en las cuales se muentran unas promociones de compra de productos y un formulario de contacto realizado con [Formspree](https://formspree.io), respectivamente.

#### Explicación mediante video como realizar una compra

https://www.youtube.com/watch?v=SsKp4HwOV94

## Instalación

Para poder inicializar el proyecto, se debe clonar el repositorio, para ello primero iniciamos git con el comando ***git init*** en la consola, parados sobre la capeta donde queramos clonar, luego, usando el siguiente comando ***git clone https://github.com/fmrg03/reactjs***, se clonará el repositorio en la carpeta donde se encuentra parado en la consola.

Seguidamente, se debe instalar los paquetes necesarios para el desarrollo del proyecto, para ello se debe ir a la carpeta donde se encuentra el proyecto y ejecutar el siguiente comando ***npm install***, esto se debe hacer en la carpeta donde se encuentra el proyecto, y comenzarán a instalarse todos los paquetes de forma automática, esto llevará unos segundos y debe realizarse porque la carpeta *node*modules* no se sube al repositorio debido a su peso.

Luego que la instalación de los paquetes culmine, se debe ejecutar el siguiente comando ***npm start***, esto se debe hacer en la carpeta donde se encuentra el proyecto, y comenzará a correr el servidor de desarrollo, esto también llevará unos segundos mientras se compila la App. Luego que se compila con éxito, se abrirá en el navegador la página principal del proyecto, donde podrá ver el ecommerce.

Sin embargo, como para este proyecto se utilizaron **Variables de Entorno**, y al repositorio no se cargó el archivo ***.env*** que contiene las credenciales de FireBase guardadas en las Variables de Entorno, la base de datos en FireBase no será accesible y no se mostrarán los productos.

Si deseas obtener las credenciales de Firebase, puedes escribirme un email a mi dirección froilanmartinr@gmail.com, explicandome porque necesitas las credenciales, y así obtenerlas.

# Librerias / Herramientas


## [React-Bootstrap](https://react-bootstrap.github.io)


La librería de Bootstrap es muy conocida y una de las más populares del mundo. Decidí implementarla ya que facilita y ayuda con el maquetado de la web.


## [React Router DOM](https://v5.reactrouter.com)


La librería de React Router DOM es muy útil, con ella se puede realizar navegación entre componentes, además de poseer hooks fáciles de usar y los cuales facilitaran la navegación, podemos implementar diversas formas de navegación entre componentes, enviando valores como parámetros o estado.

## [Firebase](https://firebase.google.com)

Firebase es una tecnología de Google que ofrece un conjunto de herramientas y características orientadas al desarrollo de aplicaciones web y móvil. Para este proyecto se usó especificamente el servicio de Firestore, que básicamente es una base de datos NoSQL, que permitió almacenar colecciones tanto de los productos del ecommerce como de las ordenes de compra que realizará cada cliente.

# Componentes

### ItemListContainer

Este componente tiene como funcionalidad de ser el contenedor donde se mostrarán los productos en la página principal del ecommerce, además de contener la lógica de la solicitud de los datos de los productos a la base de datos. Para ello, se utiliza el hook *useParams* de la librería *React Router DOM* para obtener los parámetros de la URL y saber si se debe mostrar todos los Productos o los Productos clasificados por categoría, y junto con el hook *useEffect* de la librería *React* para que se ejecute una colección de los productos de la base de datos en Firebase cuando el componente se renderice, así mismo, se va a usar el hook *useState* de la librería *React* para setear el estado del Array de los productos que se solicitaron de la base de datos, y se muestren en la página principal del ecommerce.

Se usa una variable *nombreCategoria* la cual se iguala en primera instancia al string *"Productos"* y luego se realiza un switch al ***id*** tomado por el *useParams* para setear en la variable el nombre de la categoría a mostrar en la página principal del ecommerce si existiese, y si no hay ningún id, entonces se muestra "Productos".

Se va a importar el componente *ItemList* para que se muestre la lista de productos, enviandole como props el Array de Productos (*productos*), y el componente *BannerServices* para que se muestre la imagen de promoción de los servicios que ofrece el ecommerce.

También se importa ***db*** para poder acceder a la base de datos en Firebase, *Container*, *Row* y *Col* de la librería *React-Bootstrap* para poder darle formato a la sección.

### ItemList

La función de este componente es listar, mediante un map cada uno de los productos que le llegan como props.

Si el tamaño del array de productos es igual a 0, lo cual sucede mientras se descargan los datos de la base de datos, se muestra un Spinner importado de la libreria *React-Bootstrap*, y cuando el tamaño del array de productos cambia, es decir, ya se tienen los datos solicitados, se realiza el map al array y se envian por props cada producto al componente llamado ***Item*** el cual es importado, dibujando así en el componente los productos.

### Item

Este componente se encarga de recibir por props el producto que se va a mostrar, y dibujarlo en formato de cards, con una imagen, nombre y precio.

Se importa *Container* e *Image* de la librería *React-Bootstrap* para poder darle formato a la sección y sea responsive. También se importa *Link* de la librería *React-Router-Dom* para poder redireccionar al componente que contiene el detalle del producto. 

Se crea una constante llamada *ruta*, la cual se iguala al string *"/item/"* y se concatena al id del producto, para poder redireccionar al componente que contiene el detalle del producto.

### ItemDetailContainer

Este componente tiene como funcionalidad, ser el contenedor donde se va a mostrar el detalle del producto seleccionado el cual será mostrado mediante el componente importado *ItemDetail*, además de contener la lógica de la solicitud de los datos del producto a la base de datos. Para ello, se utiliza el hook *useParams* de la librería *React Router DOM* para obtener los parámetros de la URL y saber el ID del producto que se quiere mostrar, y junto con el hook *useEffect* de la librería *React* para que se ejecute una colección del producto de la base de datos en Firebase cuando el componente se renderice, filtrando por el ID, así mismo, se va a usar el hook *useState* de la librería *React* para setear el estado del Array que va a contener el producto que se solicitó de la base de datos.

Se crea una constante *ruta* la cual se iguala al string *"/categoría/"* y se concatena con la categoría del producto, y una variable *nombreCategoría* igualada a "Productos" y seguidamente se evalúa con un switch *datos.categoria* para saber que categoría pertenece el producto y sustituir la variable con el nombre de la categoría, para finalmente armar un Breadcrumbs donde el usuario podrá ver donde se encuentra parado y navegar hacia atras o donde quiera ir.

Si el tamaño del array del producto es igual a 0, lo cual sucede mientras se descargan los datos de la base de datos, se muestra un Spinner importado de la libreria *React-Bootstrap*, y cuando el tamaño del array del producto cambia, es decir, ya se tienen los datos solicitados, se muestra el componente *ItemDetail* con los datos del producto y el componente *BannerServices*

También se importa ***db*** para poder acceder a la base de datos en Firebase, *Container*, *Row* y *Col* de la librería *React-Bootstrap* para poder darle formato a la sección.

### ItemDetail

La principal funcion del componente *ItemDetail* es mostrar todo el detalle del producto que el cliente seleccionó de la lista de productos, esta información del producto va a ser recibida por props de su componente padre *ItemDetailContainer*, junto con la cantidad inicial.

Se importa el hook *useContext* de la librería *React* para poder acceder al contexto de la aplicación, y poder usar la función *addItem* definida en el contexto para agregar el producto al carrito de compras.

Así mismo se va a definir una función *onAdd* que se encargará de contener a la función *addItem*, la cual va a recibir por parámetro y gracias a **State Uplifting** la cantidad de productos que el cliente agregará al carrito y el producto; y a su vez setear el estado de la variable *mostrar* a **true** para así mostrar el botón de "**Ir al Carrito**" solo cuando el cliente haya agregado el producto al carrito de compras.

Se define una segunda funcion *sumarRestar* la cuál se encargará de setear la variable *stock* con el valor que recibe como parámetro.

Ambas funciones van a ser enviadas como props al componenten hijo *ItemCount* (importado) donde serán ejecutadas y gracias a **State Uplifting**, se recibirá como parámetros el valor que en el otro componente se obtiene.

Para poder setear el estado o valor de estas variables, se usa el hook *useState* de la librería *React*.

Se importa el hook *useHistory* de la librería *React Router DOM* para poder redireccionar a la ruta */cart* la cual muestra el componente del carrito de compras, el push se intruduce dentro de la función *redireccionar* la cual se coloca en el botón *Ir al Carrito* como evento de click.

También se importa *Container*, *Row*, *Col* e *Image* de la librería *React-Bootstrap* para poder darle formato a la sección.

### ItemCount

Este componente va a tener como funcionalidad, ser el contador de la cantidad de unidades que el cliente quiera agregar al carrito de compras. Además de tener los botones de sumar o restar productos, contiene el botón de agregar al carrito de compras, el cuál para este proyecto va a estar embebido en el componente importado ***ModalCart*** que fue agregado como funcionalidad extra.

*ItemCount* va a recibir desde su componente padre *ItemDetail* como props *initial* que representa la cantidad inicial de la cantidad a agregar al carrito (seteada en 1), *producto* que contendrá toda la información del producto que en ese momento se esta mostrando, la función *onAdd* que mediante ***State Uplifting*** va a devolver como parámetro de la función a su componente padre la cantidad seleccionada del producto que se agregará al carrito y por último la función *sumarRestar* que también mediante ***State Uplifting*** va a devolver como parámetro el stock del producto que se muestra en pantalla a medida que el cliente suma o resta unidades.

Se usa el hook *useState* para setear el estado de la variable *contador*, y *stockfinal*.

Y se definen 3 funciones, la primera **sumarContador** encargada de agregar una unidad a la cantidad del producto y a su vez se usa para restar una unidad al stock del producto (este cambio es totalmente visual, no se refleja en la Base de Datos), la segunda **restarContador** que resta una unidad a la cantidad del producto y a su vez se usa para sumar una unidad al stock del producto (este cambio es totalmente visual, no se refleja en la Base de Datos) y la tercera **buttonOnAdd** que ejecuta la funcion *onAdd* que recibió por props.

También se importa *Container* y *Row* de la librería *React-Bootstrap* para poder darle formato a la sección.

### ModalCart

Este componente se va a usar para mostrar un modal con el detalle de lo que el cliente agregó al carrito de compras. 

Va a recibir desde su componente padre *ItemCount*, las siguientes props *nombre, unidades, imagen, precio* y la función *add*.

Contiene el botón "**Agregar al Carrito**" que al presionarlo se va a ejecutar la función *handleShow* para mostrar el modal antes descrito, y luego de 2 segundos desaparece automaticamente y allí mismo se ejecutará la función *add*.

Se va a importar *Modal* de la librería *React-Bootstrap* para poder usar el modal y el hook *useState* para setear el estado de la variable *show*.

### Cart

Este componente va a ser el encargado de mostrar el carrito de compras. Se va a importar el hook *useContext* de la librería *React* para poder acceder al *context* de la aplicación, el cuál también es importado, y así poder acceder a array *cart* que contiene los productos, y las funciones *removeItem* y *clearCart*.

Así mismo, se usara el hook *useHistory* de la librería *React Router DOM* para poder redireccionar a la ruta */productos* mediante la función *redireccionar* o a la ruta */checkout* mediante la función *irAForm*.

Estas funciones antes mecionadas van a ser usadas de la siguienet forma:

Se coloca un condicional que evalúa el largo del array *cart* y si es igual a 0, va a mostrar un mensaje de que el carrito está vacío y un botón que dirá "**Productos**" y que al hacer click, ejecute la función *redireccionar*, y si el largo del array no es igual a 0, mostrará todo el detalle de los productos agregados al carrito por el cliente, y al final un botón que dirá "**Iniciar Compra**" que al presionarlo ejecuta la función *irAForm*.

En el detalle de los productos que se muestran en el carrito, se mostrará por cada producto un botón que dirá "**Eliminar**" que al presionarlo ejecuta la función *removeItem* que se encuentra en el contexto y que recibe como parámetro el producto que se va a eliminar y lo borra del carrito. Así mismo se muestra al final del carrito otro botón que dirá "**Vaciar Carrito**" que al presionarlo ejecuta la función *clearCart* que se encuentra en el contexto y que vacía por completo el carrito.

Así mismo, se declara la variable *totalAPagar* que mediante el map que se usa para mostrar los productos que contiene el array *cart*, va sumando el precio de cada producto multiplicado por la cantidad que el cliente agregó y luego se muestra en pantalla como el total a pagar por todos los productos.

También se importa *Container*, *Col*, *Row* e *Image* de la librería *React-Bootstrap* para poder darle formato a la sección.

### Form

En este componente se va a mostrar el Formulario donde el cliente debe ingresar sus datos para poder realizar la compra. Así mismo en un costado se mostrará un resumen breve de los productos que está comprando. El cliente debe ingresar todos los datos para poder finalizar la compra, si algún dato se encuentra vacío, se mostrará un mensaje de error en el campo correspondiente.

Se importa el hook *useContext* y *context* para obtener el array *cart*, la función *clearCart* para poder vaciar el carrito luego de finalizar la compra y la función *addOrden* para setear el ID de la orden realizada y guardar el ID en el contexto.

Se importa el hook *useHistory* para poder redireccionar a la ruta */compra* luego de finalizar la compra.

Se declara las variables *totalAPagar* para sumar el total final de la compra y *fechaCompra* para almacenar la fecha que se realizó la compra.

Se declara una función **obtenerDatos** donde usamos el evento *target* para obtener los datos que ingresa el cliente en los inputs y se usa el hook *useState* para setear el estado de la variable *datos* a medida que el usuario ingresa los datos.

Se declara otra función llamada **finalizarCompra** donde dentro de ella se evalúa primero si la longitud del objeto *datos* es igual a 4 (es decir, el usuario ingresó todos los datos en el formulario), si esa condición se cumple, se realiza un *preventDefault* para que no se ejecute el evento *submit* del botón del Form y seguidamente se crea la constante **orden** con todos datos correspondientes, para luego crear la coleccion **ordenes** en la base de datos, añadir la orden a la base de datos, y si la promesa arroja un resultado positivo, ejecutar la función *addOrden* para guardar el ID de la orden que se creó en el contexto, redireccionar a la ruta */compra* y vaciar el carrito.

También se importa ***db*** para poder acceder a la base de datos en Firebase, *Container*, *Row* y *Col* de la librería *React-Bootstrap* para poder darle formato a la sección.

### Header

El componente Header va a contener el logo de la tienda, la barra de navegación incluida en el componente importado *NavBar* y el widget del carrito que viene incluido en el componente anteriormente mencionado.

Se importa *Link* de la librería *React-Router-Dom* para poder usar el enlace a la ruta */* para redireccionar al inicio de la web.

### NavBar

Este componente va a contener la barra de navegación de la tienda junto con componente importado *CartWidget*.

Se importa *Nav*, *Navbar* y *Container* de la librería *React-Bootstrap* para poder darle formato a esta sección y usar una NavBar de Bootstrap. También se importa *NavLink* de la librería *React-Router-Dom* para poder ir a las distintas rutas en la barra de navegación.

### CartWidget

Este componente es el encargado de mostrar en el Header, el widget del carrito de compras de la web.

Se usa el hook *useContext* de la librería *React* para poder acceder al carrito que se encuentra en el Contexto, y luego de eso realizar un map al array de productos del carrito e ir sumando la cantidad de unidades que tiene cada producto y finalmente mostrarlo al lado del ícono del carrito. Si la variable declarada *total* es distinta del "null" muestra la cantidad de productos que se encuentran en el carrito, sino, no muestra nada.

Se importa el Contexto: *context* para poder acceder a la información del contexto y *Link* para poder redireccionar a la ruta */cart* cuando el usuario presione el Widget y mostrar el componente del carrito de compras.


### Footer

El footer es un componente que va a contener la información de la tienda, la dirección, teléfono, correo electrónico, métodos de pago, entre otros.

Se va a importar el componente *NavBar* para así mostrar un Mapa de Sitio en el footer, se oculta el Widget del carrito de compras que viene incluido en el componente y se muestra de forma vertical a diferencia del Header que va horizontal.

También se importa *Container*, *Col* y *Row* de la librería *React-Bootstrap* para poder darle formato a la sección.

### BannerServices

Un componente extra para agregar un banner de servicios en el la web, este banner aparecerá en las categorías de los productos en la parte superior, y también en el detalle de cada producto en la parte inferior.

Se importa *Container*, *Col* y *Row* de la librería *React-Bootstrap* para poder darle formato a la sección.

### Contact

Contact es un componente creado para alojar un formulario de contacto en la web. Se usa el formulario ofrecido por la web [Formspree](https://formspree.io/).

Se importa *Container* y *Col* de la librería *React-Bootstrap* para poder darle formato a la sección.

### Promotions

Componente creado para alojar las promociones de la tienda. Se importa el componente *BannerServices* para mostrar el banner tambien en esta sección de la web y *Container*, *Col* y *Row* de la librería *React-Bootstrap* para poder darle formato a la sección.

# Contexto

### CartContext

Se utiliza *createContext* de la librería *React* para definir un contexto.

Se importa el hook *useState* de la librería *React* para poder setear el estado de el Array *cart* y de la variable *ordenF*.

Se crean 5 funciones:
1. **addItem**, como su nombre lo indica, se usa para para añadir un producto al array *cart*, pero primero se evalua si el producto ya existe en el carrito con el retorno de la segunda función **isInCart**, si la funcion *isInCart* devuelve "true" crea un array *arrayCart* y que contiene el contenido del array *cart* para poder modificarlo y luego con un *findIndex* ubica el indice del array donde se encuentra ese producto y le suma la cantidad extra que el cliente decidió agregar al carrito.

2. **isInCart**, la cual mediante un *find*, compara si el ID producto que el cliente agrga en el carrito ya existe en el array *cart*, y si ya existe devuelve "true" y sino existe "false".

3. **removeItem**, como su nombre lo indica, se usa para eliminar un producto del array *cart*, se crea un _arrayCart_ para poder trabajar el array y se le aplica un _filter_ para eliminar el producto según su ID.

4. **clearCart**, como su nombre lo indica, se usa para vaciar el array *cart*, se setea el array *cart* a un array vacio.

5. **addOrden**, se usa esta función para setear la variable *ordenF* con el string de la orden que se creó en firebase.

Por último, se crea un objeto llamado **valoresContext** que contiene el array *cart*, las 5 funciones y la variable *ordenF*.

Este objeto se le envía como *value* al **Provider**.