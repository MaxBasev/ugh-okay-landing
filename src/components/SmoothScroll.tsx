"use client";

import { useEffect } from 'react';

export default function SmoothScroll() {
	useEffect(() => {
		// Функция для плавного скролла
		const smoothScroll = (e: MouseEvent) => {
			// Ищем ближайший элемент <a> (даже если клик был на вложенном элементе)
			let target = e.target as HTMLElement;
			let linkElement: HTMLAnchorElement | null = null;

			// Проверяем сам элемент и всех его родителей, пока не найдем тег <a>
			while (target && target !== document.body) {
				if (target.tagName === 'A') {
					linkElement = target as HTMLAnchorElement;
					break;
				}
				target = target.parentElement as HTMLElement;
			}

			// Если нашли ссылку и она содержит '#'
			if (linkElement && linkElement.href && linkElement.href.includes('#') && !linkElement.href.startsWith('mailto:')) {
				// Получаем id целевого элемента
				const href = linkElement.getAttribute('href');
				if (!href) return;

				// Корректно обрабатываем как полные URL, так и относительные якорные ссылки
				const targetId = href.startsWith('#') ? href.substring(1) : href.split('#')[1];

				// Если есть целевой элемент
				if (targetId) {
					const targetElement = document.getElementById(targetId);

					if (targetElement) {
						e.preventDefault();

						// Плавный скролл с дополнительным отступом для лучшей видимости
						window.scrollTo({
							top: targetElement.offsetTop - 20,
							behavior: 'smooth'
						});

						// Обновление URL без перезагрузки страницы
						history.pushState(null, '', `#${targetId}`);
					}
				}
			}
		};

		// Добавляем обработчик события на все клики в документе
		document.addEventListener('click', smoothScroll);

		// Очищаем обработчик при размонтировании компонента
		return () => {
			document.removeEventListener('click', smoothScroll);
		};
	}, []);

	// Компонент не рендерит никакой UI
	return null;
} 