export function calPrice(user, product) {
	switch (user.identity) {
		case 'super_vip':
			if (user.level < 2) {
				// do something
			} else {
				// do something
			}
			break;
		case 'vip':
			if (user.level < 4) {
				// do something
			} else {
				// do something
			}
			break;
		case 'new':
			if (user.level < 4) {
				// do something
			} else {
				// do something
			}
			break;
		case 'super_vvip':
			if (user.level < 4) {
				// do something
			} else if (product.length < 3) {
				// do something
			} else {
				// do something
			}
			break;
		case 'invited':
			if (user.level < 3) {
				// do something
			} else {
				// do something
			}
			break;
		default:
			if (user.level < 3) {
				// do something
			} else {
				// do something
			}
			break;
	}
}
