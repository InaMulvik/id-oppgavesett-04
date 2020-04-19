<script>
	let filmer = ["The Nightmare Before Christmas", "Corpse Bride", "Spartacus", "Stardust"];
	let nyFilm = ""
	
	function regNyFilm () {
		filmer = [nyFilm, ...filmer, nyFilm]
		nyFilm = ""
	}
	
</script>


<h1>Filmer</h1>
<input blind:value={nyFilm} placeholder="Hva er din favorittfilm?">
<button on:click={regNyFilm}>Legg til film</button>
<ul>
	{#each filmer as film}
		<li>{film}</li>
	{/each}
</ul>