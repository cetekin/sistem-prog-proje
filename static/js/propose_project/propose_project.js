function pass_func(template_values_curr) {
        $(document).ready(function() {


                /* Formun default submit edilmesi engelleniyor. Asagidaki gibi kontroller yapildiktan sonra manuel olarak submit ediliyor. */
                $("#form-to-be-sent").on("submit", function() {
                        event.preventDefault()
                });


                /* Form gonderilmeden cesitli kontroller yapiliyor */
                $("#kaydet_button").on("click", function() {
                        var everythingIsOkay = true;
                        var msg = "";
                        var capacity_str = $("#project_capacity").val();
                        var re = /^[1-9][0-9]*$/i;

                        /* Proje adi bos mu? */
                        if ($("#project_name").val() == "") {
                                everythingIsOkay = false;
                                msg = " Proje adı boş bırakılamaz!"
                        }

                        else if (capacity_str == "") {
                                everythingIsOkay = false;
                                msg = " Proje kapasitesi boş bırakılamaz!"
                        }

                        else if(capacity_str.match(re) === null) {
                                everythingIsOkay = false;
                                msg = " Proje kapasitesi 0'dan büyük bir sayı olmalıdır!"
                        }


                        /* Sorun yok ise form sunucuya gonderiliyor */
                        if (everythingIsOkay) {
                                document.forms["form-to-be-sent"].submit();
                        }


                        /* Sorun var, hata mesaji basiliyor */
                        else {
                                $('#title').after('<div class="form-group row" id="danger_message">' +
                                                        '<div class="alert alert-danger" role="alert">' +
                                                                '<strong>Hata! </strong>' + '<label id="danger_source">' + msg +
                                                        '</div>' +
                                                  '</div>'
                                            )

                        }

                });

                if (template_values_curr["success"]) {
                        $('#title').after('<div class="form-group row" id="success_message">' +
                                                '<div class="alert alert-success alert-dismissible fade show" role="alert">' +
                                                        'Proje başarılı bir şekilde sisteme eklendi. "Akademisyen Proje Önerileri" listesinden ulaşılabilir.' +
                                                        '<button type="button" class="close" data-dismiss="alert" aria-label="Close">'+
                                                                '<span aria-hidden="true">&times;</span>' +
                                                        '</button>'+
                                                '</div>'+
                                        '</div>'
                                    )
                }



        });

}
