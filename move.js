function move(element) {
    element.style.position = 'fixed'


    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }
    function moveWithArrows(left, bottom, callback) {
        let direction = null;
        let x = left;
        let y = bottom;
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'

        function moveCharacter() {
            // Logic to stop character at the edge of screen bonus assignment
            let width = window.innerWidth - 10;
            let height = window.innerHeight - 10;
            if (x === 0 && direction === 'west') {
                return;
            } else if (x === width && direction === 'east') {
                return;
            } else if (y === 0 && direction === 'south') {
                return;
            } else if (y === height && direction === 'north') {
                return;
            }

            if (direction === 'west') {
                x = x - 1;
            }
            if (direction === 'east') {
                x = x + 1;
            }
            if (direction === 'south') {
                y = y - 1;
            }
            if (direction === 'north') {
                y = y + 1;
            }
            element.style.left = x + 'px';
            element.style.bottom = y + 'px';
        }

        setInterval(moveCharacter, 1);

        document.addEventListener('keydown', function (e) {
            if (e.repeat) return;
            if (e.key === 'ArrowLeft') {
                direction = 'west'

            }
            if (e.key === 'ArrowRight') {
                direction = 'east'
            }
            if (e.key === 'ArrowUp') {
                direction = 'north'
            }
            if (e.key === 'ArrowDown') {
                direction = 'south'
            }
            // callback executed only if it is passed bonu assignment
            if (callback) {
                callback(direction)
            }

        })

        document.addEventListener('keyup', function () {
            direction = null;
            if (callback) {
                callback(direction)
            }
        })

    }
    return {
        to: moveToCoordinates,
        withArrows: moveWithArrows
    }
}