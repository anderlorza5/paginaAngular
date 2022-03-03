using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("productos")]

public class ProductoEntity{

public int id {get; set;}

[MaxLength(100)]
public string nombre {get; set;}

public string descripcion {get; set;}

public int precio {get; set;}

[MaxLength(50)]
public string imagen {get; set;}


}