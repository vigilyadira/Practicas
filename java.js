const equipos = [
    'argentina',
    'Holanda',
    'Croacia',
    'Brasil',
    'Marruecos',
    'Portugal',
    'Francia',
    'Inglaterra'
];

const cuartos = [
    ['argentina', 'Holanda'],
    ['Croacia', 'Brasil'],
    ['Marruecos', 'Portugal'],
    ['Francia', 'Inglaterra']
];

const semifinales = [
    ['argentina', 'Croacia'],
    ['Marruecos', 'Francia']
];

const finales = [
    ['argentina', 'Francia']
];

function mostrarTabla(titulo, parejas) {
    console.log(titulo);
    parejas.forEach((pareja, index) => {
        console.log(`${index + 1}. ${pareja[0]} - ${pareja[1]}`);
    });
    console.log('');
}

mostrarTabla('Equipos', equipos);
mostrarTabla('Cuartos', cuartos);
mostrarTabla('Semifinales', semifinales);
mostrarTabla('Finales', finales);