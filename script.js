        function buscarUserInfo() {
            const username = document.getElementById('usernameInput').value;

            fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(data => {
                const nome = data.name || 'Nome não disponível';
                const nomeUsuario = data.login;
                const numRepositorios = data.public_repos;
                const numSeguidores = data.followers;
                const userInfoElement = document.getElementById('userInfo');
                userInfoElement.innerHTML = `
                    <p>Nome: ${nome}</p>
                    <p>Nome de usuário: ${nomeUsuario}</p>
                    <p>Número de repositórios públicos: ${numRepositorios}</p>
                    <p>Número de seguidores: ${numSeguidores}</p>
                `;
            })
            .catch(error => {
                console.error('Ocorreu um erro ao buscar as informações do usuário:', error);
            });
        }
