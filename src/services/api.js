export async function searchSeries(query) {

  const response = await fetch(

    `${BASE_URL}/search/tv?api_key=${API_KEY}&language=pt-BR&query=${encodeURIComponent(query)}`

  );

  if (!response.ok) {

    throw new Error("Erro ao pesquisar séries.");

  }

  const data = await response.json();

  return data.results;

}

export async function getMovieDetails(id){

    const response = await fetch(

`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=pt-BR`

    );

    if(!response.ok){

        throw new Error("Erro ao buscar filme");

    }

    return response.json();

}

export async function getSeriesDetails(id){

    const response = await fetch(

`${BASE_URL}/tv/${id}?api_key=${API_KEY}&language=pt-BR`

    );

    if(!response.ok){

        throw new Error("Erro ao buscar série");

    }

    return response.json();

}

export async function getMovieVideos(id) {

  const response = await fetch(
    `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=pt-BR`
  );

  if (!response.ok) {
    throw new Error("Erro ao carregar vídeos.");
  }

  return response.json();
}

export async function getSeriesVideos(id) {

  const response = await fetch(
    `${BASE_URL}/tv/${id}/videos?api_key=${API_KEY}&language=pt-BR`
  );

  if (!response.ok) {
    throw new Error("Erro ao carregar vídeos.");
  }

  return response.json();
}

export async function getMovieCredits(id) {
  const response = await fetch(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=pt-BR`
  );

  if (!response.ok) {
    throw new Error("Erro ao carregar elenco.");
  }

  return response.json();
}

export async function getSeriesCredits(id) {
  const response = await fetch(
    `${BASE_URL}/tv/${id}/credits?api_key=${API_KEY}&language=pt-BR`
  );

  if (!response.ok) {
    throw new Error("Erro ao carregar elenco.");
  }

  return response.json();
}

export async function getSimilarMovies(id) {

  const response = await fetch(
    `${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}&language=pt-BR&page=1`
  );

  if (!response.ok) {
    throw new Error("Erro ao carregar filmes semelhantes.");
  }

  return response.json();
}

export async function getSimilarSeries(id) {

  const response = await fetch(
    `${BASE_URL}/tv/${id}/similar?api_key=${API_KEY}&language=pt-BR&page=1`
  );

  if (!response.ok) {
    throw new Error("Erro ao carregar séries semelhantes.");
  }

  return response.json();
}

export async function getTrendingMovies() {
  const response = await fetch(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=pt-BR`
  );

  if (!response.ok) {
    throw new Error("Erro ao carregar destaques.");
  }

  const data = await response.json();

  return data.results;
}

export async function getTrendingAll() {
  const response = await fetch(
    `${BASE_URL}/trending/all/day?api_key=${API_KEY}&language=pt-BR`
  );

  if (!response.ok) {
    throw new Error("Erro ao carregar tendências.");
  }

  const data = await response.json();
  return data.results;
}

export async function getTopRatedMovies() {
  const response = await fetch(
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=pt-BR&page=1`
  );

  if (!response.ok) {
    throw new Error("Erro ao carregar mais bem avaliados.");
  }

  const data = await response.json();
  return data.results;
}

export async function getNowPlayingMovies() {
  const response = await fetch(
    `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=pt-BR&page=1`
  );

  if (!response.ok) {
    throw new Error("Erro ao carregar lançamentos.");
  }

  const data = await response.json();
  return data.results;
}

export async function searchMulti(query) {
  const response = await fetch(
    `${BASE_URL}/search/multi?api_key=${API_KEY}&language=pt-BR&query=${encodeURIComponent(query)}`
  );

  if (!response.ok) {
    throw new Error("Erro ao pesquisar filmes e séries.");
  }

  const data = await response.json();

  return data.results.filter(
    (item) =>
      (item.media_type === "movie" || item.media_type === "tv") &&
      item.poster_path
  );
}