var map = new GMaps({
    div: '#map',
    lat: -31.355395,
    lng: -64.577207
});
map.addMarker({
  lat: -31.355395,
  lng: -64.577207,
  title: 'Johannes',
  label: "J",
  infoWindow: {
    content: '<p>Johannes</p><p><b>Vivero:</b></p>Pasionaria<p><b>Ofrece:</b></p>Lechuga<p><b>Busca:</b></p>Cerveza'
  }
});
map.addMarker({
  lat: -31.354465,
  lng: -64.577446,
  title: 'Martin',
  label: "M",
  infoWindow: {
    content: '<p>Martin</p><p><b>Vivero:</b></p>Cola de Zorro<br>Peperina<p><b>Ofrece:</b></p>Manzana de campo<p><b>Busca:</b></p>Queso de cabra'
  }
});
