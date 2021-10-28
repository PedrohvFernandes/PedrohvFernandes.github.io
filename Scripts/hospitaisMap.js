// Metodo tradicional pra obter localização padrão
// function inicializar() {
//     let coordenadas = {lat: -22.912869, lng: -43.228963};

//     let mapa = new google.maps.Map(document.getElementById('mapa'), {
//         zoom: 15,
//         center: coordenadas 
//     });

//     let marker = new google.maps.Marker({
//         position: coordenadas,
//         map: mapa,
//         title: 'Meu marcador'
// });
// }
let x=document.getElementById("click-usuario-map");
function getLocation(){
  if (navigator.geolocation)
    {
    // Recebe os metodo de posição(showPosition) e caso tenha algum error(showError)
    // A propriedade de apenas leitura Navigator.geolocation retorna um objeto Geolocation que disponibiliza acesso de conteúdo Web à localização do dispositivo.
    // Link: https://developer.mozilla.org/pt-BR/docs/Web/API/Navigator/geolocation 
    // A API geolocation permite que o usuário forneça sua localização a aplicativos web se ele desejar. Por questões de privacidade, o usuário é perguntado se permite fornecer informações de localização.
    // https://developer.mozilla.org/pt-BR/docs/Web/API/Geolocation_API
    navigator.geolocation.getCurrentPosition(showPosition,showError);
    }
  else{x.innerHTML="Geolocalização não é suportada nesse browser.";
       x.style.color = 'red'
}
  }
 
function showPosition(position){
  const componentForm = [
    'location'
  ];
  lat=position.coords.latitude;
  lon=position.coords.longitude;
  // Ponto do marker vermelho(marcador)
  latlon=new google.maps.LatLng(lat, lon)
  mapholder=document.getElementById('mapholder');

  let myOptions={
  // Centraliza o mapa de acordo com a latitude e a logintude do dispositivo e da um zoom de 15
  center:latlon,zoom:15,

  /*
    Tipo do mapa: ROADMAP (normal, default 2D map)  ROADMAP (normal, mapa 2D padrão)
    SATELLITE (photographic map) SATÉLITE (mapa fotográfico)
    HYBRID (photographic map + roads and city names) HÍBRIDO (mapa fotográfico + estradas e nomes de cidades)
    TERRAIN (map with mountains, rivers, etc.) TERRENO (mapa com montanhas, rios, etc.)
  */
  mapTypeId:google.maps.MapTypeId.ROADMAP,

  // Aqui desativa e ativa os controles do mapa
  // mapTypeControl:true,
  mapTypeControlOptions: {
    style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR
    },

  // navigationControl: true,
  navigationControlOptions:{
    style:google.maps.NavigationControlStyle.SMALL
    }
  };
  // Inicializando o mapa passando a minha configuração pra ele
  let map = new google.maps.Map(document.getElementById("mapholder"),myOptions);
  // inicializando o marker passando o objeto do mapa, a posição que é o ponto e o title
  const marker=new google.maps.Marker({
    position:latlon,
    map:map,
    title:"Localização mais proxima!",
    // animação do ponto:
    animation: google.maps.Animation.BOUNCE, //DROP
    // Icone do marcador
    icon: 'svgs/avatar.svg'
  });

  // Crie a caixa de pesquisa e vincule-a ao elemento de IU do google maps.
  var input = document.getElementById('location');
  // Vinculando a caixa de pesquisa no front-end com o elemento da IU do google maps
  var searchBox = new google.maps.places.SearchBox(input);

  // // Ele faz pegar o input e colocar no top do lado esquerdo
  // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  // input.style.marginTop = "0.5em"

 // Polariza os resultados do SearchBox para a janela de visualização do mapa atual.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  var markersPontosDevolvidos = [];
  // Ouça o evento disparado quando o usuário seleciona uma previsão e recupera
  // mais detalhes para aquele lugar.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Limpe os marcadores antigos.
    markersPontosDevolvidos.forEach(function(marker) {
      marker.setMap(null);
    });
    markersPontosDevolvidos = [];

    // Para cada lugar, pegue o ícone, nome e localização.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      if (!place.geometry) {
        alert("O lugar devolvido não contém geometria");
        return;
      }
      var icon = {
        // Pega a url da quele icone 
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Crie um marcador para cada lugar.
      markersPontosDevolvidos.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location,
        // animação do ponto:
        animation: google.maps.Animation.BOUNCE, //DROP
      }));

      if (place.geometry.viewport) {
        // Apenas geocódigos têm janela de visualização.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });

}

function showError(error)
  {
  switch(error.code) 
    {
    case error.PERMISSION_DENIED:
      x.innerHTML="Usuário rejeitou a solicitação de Geolocalização."
      x.style.color = 'red'
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML="Localização indisponível."
      x.style.color = 'red'
      break;
    case error.TIMEOUT:
      x.innerHTML="O tempo da requisição expirou."
      x.style.color = 'red'
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML="Algum erro desconhecido aconteceu."
      x.style.color = 'red'
      break;
    }
}


//Bloqueia todo tipo de caracter especial
document.getElementById("location").onkeypress = function(e) {
    let chr = String.fromCharCode(e.which);
    if (",-1234567890ABCEDFGHIJKLMNOPQRSTUVXWYZ abcdefghijklmnopqrstuvxwyzáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ".indexOf(chr) < 0)
      return false;
};