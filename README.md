--- 28.03.2022 ---
------ 20:40 -----

Udało mi się dodać podstawową fizykę, za pomocą Vectorów zmieniam pozycję obiektu na scenie, poprzez dodanie wielkości x i y wektora do aktualnej pozycji obiektu.

Grawitacja działa na zasadzie dostępnego obiektu "clock" w hooku useFrame. Nie jest to najlepsze rozwiazanie, ze wzgledu na to ze clock.elapsedTime ciągle się powieksza. Natomiast clock.getDelta() jest równe 0 i nie ma wplywu na stałą GRAVITY. Natomiast przez brak jakiegokolwiek przemnożenia stałej GRAVITY ściany/ograniczenia zaprzestają działać. Ze względu na to musze znaleźć inne rozwiązanie tego problemu.

------ 22:35 -----

Okazuje się że można zmieniać pozycję obiektu poprzez metodę .add() która to dodaje współczynniki wektora którego dodajemy do aktualnej pozycji obiektu, z tego co rozumiem. Dodatkowo możemy dodać wektor grawitacji do wektora przyśpieszenia którego to wcześniej dodaliśmy do pozycji obiektu, przekłąda się na jakiś rodzaj fizyki.

Tak jak w ostatniej implementacji ograniczamy możliwość odbijania się kulki poprzez ściany, w momencie zetknięcia się kulki ze ściana odwracamy wektor co daje efekt odbijania się kulki od ścian. W momencie w którym kulka zetknie się z "podłożem" dodatkowo zmniejszamy wielkość wektora o 0.8 co daje efekt kulki spadającej na ziemię. Niestety efekt ten nie działa na osi X, po zetknięciu ze ściana wektor nie odwraca swojej wartości a kulka pozostaje w "rogu ściany".

Po uderzeniu bocznej ściany wektor X spada do na tyle małych wartości że wygląda tak jakby utkną, w sumie jest to pożadane zachowanie, w jakimś stopniu.
