const $tabs = document.querySelectorAll('.ai-tabs__link'),
	$line = document.querySelector('.ai-tabs__line'),
	getPos = ($currentTarget) => {
		const $parentContainer = document.querySelector('.ai-tabs__tab-header ul'),
			currentWidth = $currentTarget.offsetWidth,
			currentPos = {
				top: $currentTarget.offsetTop - $parentContainer.offsetTop,
				left: $currentTarget.offsetLeft - $parentContainer.offsetLeft,
			};
		return currentPos;
	},
	onLoadLine = () => {
		const $onLoadActive = document.querySelector('.ai-tabs--active'),
			divId = $onLoadActive.getAttribute('href');

		animateLine($onLoadActive, $line);
		document.querySelector(divId).classList.add('ai-tabs__content--active');
	},
	animateLine = ($currentTarget, $l) => {
		const widthOfLine = $l.offsetWidth,
			currentWidth = $currentTarget.offsetWidth,
			currentPos = getPos($currentTarget);

		$l.style.left = `${currentPos.left}px`;
		$l.style.width = `${currentWidth}px`;
	},
	setActive = (e, $tabs) => {
		e.preventDefault();
		const divId = e.currentTarget.getAttribute('href');

		$tabs.forEach(($tab) => {
			$tab.classList.remove('ai-tabs--active');
		});

		document.querySelectorAll('.ai-tabs__content').forEach(($content) => {
			$content.classList.remove('ai-tabs__content--active');
		});

		e.currentTarget.classList.add('ai-tabs--active');
		document.querySelector(divId).classList.add('ai-tabs__content--active');
	};

$tabs.forEach(($tab) => {
	onLoadLine();
	$tab.addEventListener('click', (e) => {
		setActive(e, $tabs);
		animateLine(e.currentTarget, $line);
	});
});
