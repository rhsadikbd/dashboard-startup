filterUser() {
	if( this.searchItem ) {
		return this.users.filter( prod => Object.entries(prod)
			.reduce( (result, [, value]) => !(value instanceof Object) ? result += ` ${value}` : result, '')
			.toLowerCase()
			.includes( this.searchItem.toLowerCase() ));
	}

	return this.users;
}