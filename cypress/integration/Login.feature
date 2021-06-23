Feature: Login

Scenario: Autentico no sistema com credenciais válidas
	Given que acesso o site
	When informo as seguintes credenciais
		| username      | password     |
		| standard_user | secret_sauce |
	And me autentico no sistema
	And o menu do usuário está visível
	Then o usuário aparece logado