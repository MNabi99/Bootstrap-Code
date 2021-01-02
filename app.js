 $(function () {
            $(window).resize(function () {
                var windowWidth = $(window).width();
                if (windowWidth < 768) {
                    $('#deviceSize').text('Device Size: ' +
                        windowWidth + 'px - Extra small devices (Phones)');

                }
                else if (windowWidth < 992) {
                    $('#deviceSize').text('Device Size: ' +
                        windowWidth + 'px - Small devices (Tablets)');

                }
                else if (windowWidth < 1200) {
                    $('#deviceSize').text('Device Size: ' +
                        windowWidth + 'px - Medium devices (Desktops)');

                }
                else {
                    $('#deviceSize').text('Device Size: ' +
                        windowWidth + 'px - Large devices (Desktops)');

                }
            }
            );

        }
        );